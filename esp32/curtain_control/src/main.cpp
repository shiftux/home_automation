#include "vars.h"

WiFiClient espClient;
PubSubClient client(espClient);
const int baudRate = 115200;
const int motorTimeout = 5000;
const int stepsPerRevolution = 200;  // change this to fit the number of steps per revolution
const int stepper_motor_speed = 80;  // rpm
const int blocking_steps = 4;

bool debug = true;

#define OPEN_HALL_SENSOR 34
#define CLOSED_HALL_SENSOR 35
#define MOTOR_OUT1 33
#define MOTOR_OUT2 25
#define MOTOR_OUT3 26
#define MOTOR_OUT4 27

// initialize the stepper library
Stepper motor(stepsPerRevolution, IN1, IN3, IN2, IN4);

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
  pinMode(MOTOR_OUT1, OUTPUT);
  pinMode(MOTOR_OUT2, OUTPUT);
  pinMode(MOTOR_OUT3, OUTPUT);
  pinMode(MOTOR_OUT4, OUTPUT);
}

bool isAtOpenEndSwitch() {
  char position[7];
  String pos = "open";
  if (digitalRead(OPEN_HALL_SENSOR) == 0){ // hall sensor is 0 when magnet is present
    if(debug){Serial.print("open end switch reporting: ");Serial.println(digitalRead(OPEN_HALL_SENSOR) == 0);}
    pos.toCharArray(position, 7);
    /*!!!!!!!!!!!!!!!!!!!!!!
    ! adapt
    !!!!!!!!!!!!!!!!!!!!!!*/
    client.publish("curtains/south/stat/POSITION", position);
    return true;
  }
  else {
    return false;
  }
}


bool isAtClosedEndSwitch() {
  char position[7];
  String pos = "closed";
  if (digitalRead(CLOSED_HALL_SENSOR) == 0){ // hall sensor is 0 when magnet is present
    if(debug){Serial.print("closed end switch reporting: ");Serial.println(digitalRead(CLOSED_HALL_SENSOR) == 0);}
    pos.toCharArray(position, 7);
    /*!!!!!!!!!!!!!!!!!!!!!!
    ! adapt
    !!!!!!!!!!!!!!!!!!!!!!*/
    client.publish("curtains/south/stat/POSITION", position);
    return true;
  }
  else {
    return false;
  }
}

void motorStop() {
  if(debug){Serial.println("motor stopped");}
  // TODO: run motor stop code
  digitalWrite(MOTOR_OUT_OPEN, 0);
  digitalWrite(MOTOR_OUT_CLOSE, 0);
}

void motorClose() {
  long start = millis();
  if(debug){Serial.println("motor closing curtains");}
  while ((!isAtClosedEndSwitch()) && (millis() - start < motorTimeout)){
    motor.steps(blocking_steps);
  }
  motorStop();
}

void motorOpen() {
  long start = millis();
  if(debug){Serial.println("motor opening curtains");}
  while ((!isAtOpenEndSwitch()) && (millis() - start < motorTimeout)){
    motor.steps(-blocking_steps);
  }
  motorStop();
}

void mqttCallback(char* topic, byte* payload, unsigned int length) {
  char message[7];
  for (int i = 0; i < length; i++) {
    message[i] = (char)payload[i];
  }

  if(debug){
    Serial.print("Message arrived in topic: ");
    Serial.println(topic);
    Serial.print("Message: ");
    Serial.println(message);
    Serial.println("-----------------------");
  }

  if((message[0]=='o')&&(message[1]=='p')&&(message[2]=='e')&&(message[3]=='n')) {
    if(debug){Serial.println("got motor opening message");}
    motorOpen();
  } else if((message[0]=='c')&&(message[1]=='l')&&(message[2]=='o')&&(message[3]=='s')&&(message[4]=='e')) {
    if(debug){Serial.println("got motor closing message");}
    motorClose();
  } else {
    motorStop();
  }
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
  client.setCallback(mqttCallback);
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
    client.subscribe("curtains/south/cmnd/POSITION");
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
  motor.setSpeed(stepper_motor_speed);
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
