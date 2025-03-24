#!/usr/bin/python3

import sys
import logging
import serial
import _thread
import queue
import re
import paho.mqtt.client as mqtt
import importlib.machinery
import importlib.util
from pathlib import Path
from flask import Flask
from flask import jsonify

# get secret mqtt credentials
script_dir = Path(__file__).parent
mymodule_path = str(script_dir.joinpath('mqtt_credentials.secret'))
loader = importlib.machinery.SourceFileLoader('mqtt_credentials.secret', mymodule_path)
spec = importlib.util.spec_from_loader('mqtt_credentials.secret', loader)
mqtt_credentials = importlib.util.module_from_spec(spec)
loader.exec_module(mqtt_credentials)

config = {
    "serialPort": "/dev/ttyUSB0",
    "serialSpeed": 9600,
    "mqttBroker": "192.168.50.28",
    "mqttPort": 1883,
    "restBindIp": "0.0.0.0",
    "restBindPort": "3333",
    "deviceId": "LivingRoom"
}

validMainCommands = [
    "PWR",
    "VOL",
    "SOURCE"
]

currentValues = {}

requestQueue = queue.Queue()
answerQueue = queue.Queue()

# Set to DEBUG when debugging, INFO elsewise
logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')


##########
# Helper #
##########
def stripCommand(cmd):
    m = re.search("([a-zA-Z0-9]+\.[a-zA-Z0-9\.]+)[?=].*", cmd)
    if m:
        return m.group(1)
    else:
        return ""


def stripValue(cmd):
    m = re.search("[a-zA-Z0-9]+\.[a-zA-Z0-9\.]+[=](.*)", cmd)
    if m:
        return m.group(1)
    else:
        return ""


##########
#  MQTT  #
##########
def mqtt_on_connect(client, userdata, flags, rc):
    global config
    logging.debug("[MQTT] Connected to broker (result code " + str(rc) + ")")
    client.subscribe("epson/" + config["deviceId"] + "/Commands")


def mqtt_on_message(client, userdata, msg):
    global requestQueue
    logging.debug("[MQTT] Message on '" + str(msg.topic) + "': " + str(msg.payload))
    requestQueue.put(msg.payload.decode('utf8'))


##########
# SERIAL #
##########
def handleSerial(config, mqttClient, requestQueue, answerQueue, currentValues):
    try:
        ser = serial.Serial(port=config["serialPort"], baudrate=config["serialSpeed"],
                            xonxoff=False, rtscts=False, dsrdtr=False, timeout=0.5)
    except:
        logging.critical("[SERIAL] Could not open " + config["serialPort"])
        sys.exit(1)

    logging.info("[SERIAL] Connected to " + config["serialPort"] + " with " +
                 str(config["serialSpeed"]) + " Baud")

    buffer = ""
    while 1:
        cmd = None
        try:
            cmd = requestQueue.get_nowait()
        except:
            pass

        if(cmd):
            logging.debug("[SERIAL] Sending request '" + cmd + "'")
            ser.write(bytes("\r" + cmd + "\r", 'utf-8'))
            cmd = None

        readByte = ser.read(1)
        if(readByte):
            if(ord(readByte) == 13):
                if(buffer):
                    logging.debug("[SERIAL] Found a message on the wire: " + buffer)
                    command = stripCommand(buffer.lower())
                    if(command):
                        currentValues[command] = stripValue(buffer.lower())
                    answerQueue.put(buffer)
                    mqttClient.publish("epson/" + config["deviceId"] + "/Messages", buffer)
                buffer = ""
            else:
                buffer = buffer + readByte.decode('utf-8')


############
# REST-API #
############
app = Flask(__name__)


@app.route('/epson/v1.0/<command>', methods=['GET'])
def getMainCommand(command):
    command = command.lower()
    if command not in validMainCommands:
        answerStruct = {"error": 2, "command": command, "value": None, "errorMsg": "Command invalid"}
        return jsonify(answerStruct)
    epsonCmd = command
    if epsonCmd in currentValues:
        logging.info("Serving request from cache")
        answerStruct = {"error": 0, "command": command, "value": currentValues[epsonCmd]}
        return jsonify(answerStruct)
    # this is rather ugly, but...
    # since we are expecting an answer to our query, let's make sure there
    # is nothing else stuck in the answerQueue
    # TODO: optimize handleSerial() to only put answers to outstanding requests into answerQueue
    with answerQueue.mutex:
        answerQueue.queue.clear()
    requestQueue.put(command + "?")
    try:
        answer = answerQueue.get(True, 4).lower()
        if stripCommand(answer) == command:
            answerStruct = {"error": 0, "command": command, "value": stripValue(answer)}
            return jsonify(answerStruct)
    except:
        pass
    answerStruct = {"error": 1, "command": command, "value": None, "errorMsg":
                    "Did not receive a valid answer withing 4 seconds"}
    return jsonify(answerStruct)


@app.route('/epson/v1.0/<command>/<value>', methods=['PUT'])
def putMainCommand(command, value):
    command = command.lower()
    if command not in validMainCommands:
        answerStruct = {"error": 2, "command": command, "value": value, "errorMsg": "Command invalid"}
        return jsonify(answerStruct)
    # this is rather ugly, but...
    # since we are expecting an answer to our query, let's make sure there
    # is nothing else stuck in the answerQueue
    # TODO: optimize handleSerial() to only put answers to outstanding requests into answerQueue
    with answerQueue.mutex:
        answerQueue.queue.clear()
    requestQueue.put(command + "=" + value)
    try:
        answer = answerQueue.get(True, 4).lower()
        if stripCommand(answer) == command:
            answerStruct = {"error": 0, "command": command, "value": stripValue(answer)}
            return jsonify(answerStruct)
    except:
        pass
    answerStruct = {"error": 1, "command": command, "value": None, "errorMsg":
                    "Did not receive a valid answer withing 4 seconds"}
    return jsonify(answerStruct)


###############
# MAIN Thread #
###############
def main(args):
    logging.info("Starting mqtt thread")
    try:
        client = mqtt.Client()
        client.on_connect = mqtt_on_connect
        client.on_message = mqtt_on_message
        client.username_pw_set(mqtt_credentials.username, mqtt_credentials.password)
        client.connect(config["mqttBroker"], config["mqttPort"], 60)
        client.loop_start()
    except:
        logging.critical("Could not setup mqtt session. Bye")
        sys.exit(1)

    logging.info("Starting serial port thread")
    try:
        _thread.start_new_thread(handleSerial, (config, client, requestQueue, answerQueue, currentValues))
    except Exception as e:
        logging.critical("Error spawning serial port thread: " + str(e))
        sys.exit(1)

    app.run(host=config["restBindIp"], port=config["restBindPort"])


if __name__ == '__main__':
    main(sys.argv[1:])
