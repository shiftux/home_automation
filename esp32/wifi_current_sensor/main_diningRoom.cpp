#include "vars.h"

WiFiClient espClient;
PubSubClient client(espClient);
const int currentInputPin = 34;
String status = "OFF";
int consecutiveOff = 0, consecutiveOn = 0;
char thresholdTopic[10] = "esp32/drt"; // DiningRoomThreshold // lrt LivingRoomThreshold
char clientID[] = "ESP32_DiningRoom"; // "ESP32_LivingRoom"
char pubTopic[] = "sensor/light/diningRoom"; // "sensor/light/livingRoom"
int threshold = 17500;

void connectWifi() {
  // Serial.print("Connecting to WiFi");
  WiFi.begin(ssid, wifiPw);
  while (WiFi.status() != WL_CONNECTED) {
      delay(500);
      // Serial.print(".");
  }
  // Serial.println("WiFi connected.");
  // Serial.println("IP address: ");
  // Serial.println(WiFi.localIP());
  // Serial.println(WiFi.macAddress());
  delay(1000);
}

void mqttCallback(char* topic, byte* payload, unsigned int length) {   //callback includes topic and payload ( from which (topic) the payload is comming)
  String value = "";
  for (int i=0;i<length;i++) {
      value += (char)payload[i];
  }
  threshold = value.toInt();
}

void connectMQTT() {
  // Serial.println("Connect MQTT");
  client.setServer(mqttServer, mqttPort);
    while (!client.connected()) {
    // Serial.println("Connecting to MQTT");
    if (client.connect(clientID, mqttUser, mqttPassword )) {
      client.subscribe(thresholdTopic);
      // Serial.println("connected");
    } else {
      // Serial.print("failed with state ");
      // Serial.print(client.state());
      delay(2000);
    }
  }
  client.setCallback(mqttCallback);
}

String getOnOff() {
  int sum = 0;
  long now = 0, start = millis();
  char currentChar[10];
  while (now - start < 1500) {
    now = millis();
    sum += analogRead(currentInputPin);
    // signed int currentValue = analogRead(currentInputPin);
    // String currentString = (String)currentValue;
    // currentString.toCharArray(currentChar, 10);
    // Serial.println(currentChar);
    delay(5);
  }
  if (sum > threshold) {
    consecutiveOn++; consecutiveOff = 0;}
  else {
    consecutiveOff++; consecutiveOn = 0;}
  if (consecutiveOn >= 3){
    status = "ON";
  } else if (consecutiveOff >= 3){
    status = "OFF";
  }
  // debug
    char sumChar[16];
    String sumString = (String)sum;
    sumString.toCharArray(sumChar, 16);
    char conseqChar[16];
    String conseqString = (String)consecutiveOn;
    conseqString.toCharArray(conseqChar, 16);
    char thresholdChar[16];
    String thresholdString = (String)threshold;
    thresholdString.toCharArray(thresholdChar, 16);
    Serial.println(sumChar);
    client.publish("esp32/sum", sumChar);
    client.publish("esp32/conseqOn", conseqChar);
    client.publish("esp32/threshold", thresholdChar);
  return status;
}

void setup() {
  // Serial.begin(115200); // open the serial port at 115200 bps
  pinMode(currentInputPin,INPUT);
  analogSetAttenuation(ADC_0db);  //For all pins
  analogSetPinAttenuation(currentInputPin, ADC_6db);
  analogSetClockDiv(64);
  // Serial.println("Starting Setup");
  // Set WiFi to station mode and disconnect from an AP if it was previously connected
  // Serial.println("Stopping WiFi");
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);

  connectWifi();
  connectMQTT();
  // Serial.println("Setup done");
}

long lastMsg = 0;
int currentValue;
String currentString;
char currentChar[5];
long lastStatus = 0;
char currentStatus[5];
void loop() {
  if (!client.connected()) {connectMQTT();}
  // long nowSerial = millis();
  long now = millis();
  // if (nowSerial - lastMsg > 50) {
  //   lastMsg = nowSerial;
  //   currentValue = analogRead(currentInputPin);
  //   currentString = (String)currentValue;
  //   currentString.toCharArray(currentChar, 5);
  //   Serial.println(currentChar);
  //   client.publish("esp32/test", currentChar);
  // }
  if (now - lastStatus > 1600) {
    lastStatus = now;
    if (WiFi.status() != WL_CONNECTED) { connectWifi(); }
    else {
      bool loop = client.loop();
      if (!loop) { connectMQTT(); }
      else {
        String status = getOnOff();
        // Serial.println(status);
        status.toCharArray(currentStatus, 5);
        client.publish(pubTopic, currentStatus);
      }
    }
  }
}
