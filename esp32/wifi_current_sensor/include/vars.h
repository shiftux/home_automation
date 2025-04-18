#include <Arduino.h>
#include "WiFi.h"
#include <SPI.h>
#include <PubSubClient.h>
#include <string.h>
#include <PZEM004Tv30.h>

extern const char ssid[10];
extern const char wifiPw[31];
extern const char*  mqttServer;
extern const char* mqttUser;
extern const char* mqttPassword;
extern const int mqttPort;
