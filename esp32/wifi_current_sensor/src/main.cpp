#include "vars.h"

WiFiClient espClient;
PubSubClient client(espClient);
const int currentInput = 34;

void connectWifi() {
  Serial.print("Connecting to WiFi");
  WiFi.begin(ssid, wifiPw);
  while (WiFi.status() != WL_CONNECTED) {
      delay(500);
      Serial.print(".");
  }
  Serial.println("WiFi connected.");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
  Serial.println(WiFi.macAddress());
  delay(1000);
}

void connectMQTT() {
  Serial.println("Connect MQTT");
  client.setServer(mqttServer, mqttPort);
    while (!client.connected()) {
    Serial.println("Connecting to MQTT");
    // if (client.connect("ESP32_DiningRoom", mqttUser, mqttPassword )) {
    if (client.connect("ESP32_LivingRoom", mqttUser, mqttPassword )) {
      Serial.println("connected");
    } else {
      Serial.print("failed with state ");
      Serial.print(client.state());
      delay(2000);
    }
  }
}

void setup() {
  Serial.begin(9600); // open the serial port at 9600 bps
  pinMode(currentInput,INPUT);
  Serial.println("Starting Setup");
  // Set WiFi to station mode and disconnect from an AP if it was previously connected
  Serial.println("Stopping WiFi");
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);

  connectWifi();
  connectMQTT();
  Serial.println("Setup done");
}

String getOnOff() {
  int sum = 0;
  long now = 0;
  String status = "OFF";
  long start = millis();
  while (now - start < 1100) {
    now = millis();
    sum += analogRead(currentInput);
    delay(10);
  }
  if (sum > 500) {status = "ON";};
  return status;
}

// long lastMsg = 0;
// int currentValue;
// String currentString;
// char currentChar[5];
long lastStatus = 0;
char currentStatus[5];
void loop() {
  // long nowSerial = millis();
  long now = millis();
  // if (nowSerial - lastMsg > 100) {
  //   lastMsg = nowSerial;
  //   currentValue = analogRead(currentInput);
  //   currentString = (String)currentValue;
  //   currentString.toCharArray(currentChar, 5);
  //   // Serial.println(currentChar);
  //   client.publish("esp32/test", currentChar);
  // }
  if (now - lastStatus > 1200) {
    lastStatus = now;
    if (WiFi.status() != WL_CONNECTED) { connectWifi(); }
    else {
      bool loop = client.loop();
      if (!loop) { connectMQTT(); }
      else {
        String status = getOnOff();
        Serial.println(status);
        status.toCharArray(currentStatus, 5);
        // client.publish("sensor/light/diningRoom", currentStatus); // also change the clientID!!!
        client.publish("sensor/light/livingRoom", currentStatus);
      }
    }
  }
}
