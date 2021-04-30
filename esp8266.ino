#include  <ESP8266WiFi.h>
#include <WiFiClient.h> 
#include <SocketIoClient.h>
char* ssid = "WiFi_ssid";
char* password = "Wifi_Password";
char server[] = "192.168.0.16";
const int httpPort = 3000;
String postData;

const int trigPin = D6; //Distance sensor
const int echoPin = D4; // Distance Sensor
long duration;
int distance;
const char * data1;

WiFiClient client;
SocketIoClient socket;
void  setup () {  
  Serial.begin(9600);
  WiFi.begin(ssid, password);
  
  while(WiFi.status()!=WL_CONNECTED)
  {
    Serial.print(".");
    delay (200);
  }
  Serial.println("");
  Serial.print("Successfully Connected to ");
  Serial.println(ssid);
  Serial.print("Ip address: ");
  Serial.println(WiFi.localIP());

  socket.begin(server, httpPort);
  socket.on("sendData", payload);
  
  pinMode(trigPin, OUTPUT); // Sets the trigPin as an Output
  pinMode(echoPin, INPUT); //Sets echoPin as Input
}
void  loop () {
   digitalWrite(trigPin, LOW);
   delayMicroseconds(2);
  
   digitalWrite(trigPin, HIGH);
   delayMicroseconds(10);
   digitalWrite(trigPin, LOW);

   duration = pulseIn(echoPin, HIGH);

   distance= duration*0.034/2;

    if(distance <= 10){
      socket.emit("message", "{\"data\":\"true\"}");
    } else{
      socket.emit("message", "{\"data\":\"false\"}");
    }
    Serial.print(distance);
  socket.loop();
  }
  
void payload(const char * payload, size_t length){
  Serial.println(payload);

}
