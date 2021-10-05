#include "vars.h"

WiFiClient espClient;
PubSubClient client(espClient);
const int baudRate = 115200;
const int motorTimeout = 5000;

bool debug = true;

#define OPEN_HALL_SENSOR 34
#define CLOSED_HALL_SENSOR 35
#define MOTOR_OUT_OPEN 25
#define MOTOR_OUT_CLOSE 26

/*!!!!!!!!!!!!!!!!!!!!!!
! Be sure to set the right MQTT topic!
! AND the mqtt client
!!!!!!!!!!!!!!!!!!!!!!*/

/**************
* helper functions
**************/

void my_init(){
  pinMode(OPEN_HALL_SENSOR, INPUT);
  pinMode(CLOSED_HALL_SENSOR, INPUT);
  pinMode(MOTOR_OUT_OPEN, OUTPUT);
  pinMode(MOTOR_OUT_CLOSE, OUTPUT);
}

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
      /*!!!!!!!!!!!!!!!!!!!!!!
      ! adapt
      !!!!!!!!!!!!!!!!!!!!!!*/
      if (client.connect("ESP32_curtain_south", mqttUser, mqttPassword )) {
        if(debug){ Serial.println("connected"); }
      } else {
        if(debug){
          Serial.print("failed with state ");
          Serial.print(client.state());
      }
      delay(2000);
    }
    /*!!!!!!!!!!!!!!!!!!!!!!
    ! adapt
    !!!!!!!!!!!!!!!!!!!!!!*/
    client.subscribe("curtains/south");
  }
}

bool isAtOpenEndSwitch() {
  if (digitalRead(OPEN_HALL_SENSOR) == 0){ // hall sensor is 0 when magnet is present
    return true;
  }
  else {
    return false;
  }
}

bool isAtClosedEndSwitch() {
  if (digitalRead(CLOSED_HALL_SENSOR) == 0){ // hall sensor is 0 when magnet is present
    return true;
  }
  else {
    return false;
  }
}

void motorStop() {
  if(debug){Serial.println("motor stopped");}
  // TODO: run motor stop code
  digitalWrite(MOTOR_OUT_OPEN, LOW);
  digitalWrite(MOTOR_OUT_CLOSE, LOW);
}

void motorClose() {
  long start = millis();
  while ((!isAtClosedEndSwitch()) && (millis() - start < motorTimeout)){
    if(debug){Serial.println("motor closing curtains");}
    // TODO: run motor close code
    digitalWrite(MOTOR_OUT_CLOSE, HIGH);
  }
  motorStop();
}

void motorOpen() {
  long start = millis();
  while ((!isAtOpenEndSwitch()) && (millis() - start < motorTimeout)){
    if(debug){Serial.println("motor opening curtains");}
    // TODO: run motor open code
    digitalWrite(MOTOR_OUT_OPEN, HIGH);
  }
  motorStop();
}

void callback(char* topic, byte* payload, unsigned int length) {
  char message[7];
  for (int i = 0; i < length; i++) {
    message[i] = (char)payload[i];
  }

  if(debug){
    Serial.print("Message arrived in topic: ");
    Serial.println(topic);
    Serial.print("Message:");
    Serial.println(message);
    Serial.println("-----------------------");
  }

  if((strcmp(message, "OPEN") == 0) || (strcmp(message, "open") == 0)) {
    motorOpen();
  } else if((strcmp(message, "CLOSE") == 0) || (strcmp(message, "close") == 0)) {
    motorClose();
  } else {
    motorStop();
  }

}

void setup() {
  if(debug){
    Serial.begin(baudRate); // open the serial port at baudrate
    Serial.println("Starting Setup");
    Serial.println("Stopping WiFi");
  }
  my_init();
  // Set WiFi to station mode and disconnect from an AP if it was previously connected
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);

  connectWifi();
  connectMQTT();
  if(debug){ Serial.println("Setup done"); }
}



/**************
* main loop
**************/

void loop() {
  if (WiFi.status() != WL_CONNECTED) { connectWifi(); }
  bool loop = client.loop();
  if (!loop) {
    if(debug){ Serial.println("reconnecting mqtt"); }
    connectMQTT();
    client.loop();
  }
}
