#include "vars.h"

WiFiClient espClient;
PubSubClient client(espClient);
const int baudRate = 115200;

bool debug = false;

/*!!!!!!!!!!!!!!!!!!!!!!
! Be sure to set the right MQTT topic!
!!!!!!!!!!!!!!!!!!!!!!*/

/**************
* PZEM init
**************/
#if !defined(PZEM_RX_PIN) && !defined(PZEM_TX_PIN)
#define PZEM_RX_PIN 16
#define PZEM_TX_PIN 17
#endif

#if !defined(PZEM_SERIAL)
#define PZEM_SERIAL Serial2
#endif

PZEM004Tv30 pzem(PZEM_SERIAL, PZEM_RX_PIN, PZEM_TX_PIN);

/**************
* helper functions
**************/

void connectWifi() {
  if(debug){ Serial.print("Connecting to WiFi"); }
  WiFi.begin(ssid, wifiPw);
  while (WiFi.status() != WL_CONNECTED) {
      delay(500);
      Serial.print(".");
  }
  if(debug){
    Serial.println("WiFi connected.");
    Serial.println("IP address: ");
    Serial.println(WiFi.localIP());
    Serial.println(WiFi.macAddress());
  }
  delay(1000);
}

void connectMQTT() {
  client.setServer(mqttServer, mqttPort);
    while (!client.connected()) {
      if(debug){ Serial.println("Connecting to MQTT"); }
      if (client.connect("ESP32_LivingRoom", mqttUser, mqttPassword )) {
        if(debug){ Serial.println("connected"); }
      } else {
        if(debug){
          Serial.print("failed with state ");
          Serial.print(client.state());
      }
      delay(2000);
    }
  }
}

void setup() {
  if(debug){
    Serial.begin(baudRate); // open the serial port at baudrate
    Serial.println("Starting Setup");
    Serial.println("Stopping WiFi");
  }
  // Set WiFi to station mode and disconnect from an AP if it was previously connected
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);

  connectWifi();
  connectMQTT();
  if(debug){ Serial.println("Setup done"); }
}

String getOnOff() {
  String status = "NOSTAT";
  float v = pzem.voltage();
  if(isnan(v)){
    status = "OFF";
  } else if (v < 0.0) {
    v = 0.0;
    status = "OFF";
  } else if (v > 30) {
    status = "ON";
  } else {
    status = "UNDEF";
  }
  if(debug){
    Serial.print("Read voltage: ");Serial.print(v);Serial.println("V; ");
    Serial.print("status: ");Serial.println(status);
  }
  return status;
}

/**************
* main loop
**************/

long lastStatusTime = 0;
String lastStatus = "init";
char currentStatus[5];
void loop() {
  String status;
  long now = millis();
  if (now - lastStatusTime > 500) {
    lastStatusTime = now;
    if (WiFi.status() != WL_CONNECTED) { connectWifi(); }
    else {
      status = getOnOff();
      if (status != lastStatus) {
        bool loop = client.loop();
        if (!loop) { connectMQTT(); }
        if(debug){
          Serial.print("status: ");Serial.println(status);
          Serial.print("last status: ");Serial.println(lastStatus);
        }
        status.toCharArray(currentStatus, 7);
        client.publish("sensor/light/diningRoom", currentStatus);
      } else {
        if(debug){ Serial.println("no update");}
      }
      lastStatus = status;
    }
  }
}
