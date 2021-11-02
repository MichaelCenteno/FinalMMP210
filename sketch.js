var serial;

var portName = "/dev/tty.usbmodem141101";

var inMessage = [0, 0];

function preload(){
  soundFormats('mp3','ogg');
  mySound = loadSound('Meow.mp3');
}

function setup() {
  createCanvas(400,400);

  serial = new p5.SerialPort();

  serial.list();

  serial.open(portName);

  serial.on('list', gotList);

  serial.on('data', gotData);
}


// Got the list of ports
function gotList(thelist) {
  // theList is an array of their names
  for (var i = 0; i < thelist.length; i++) {
    // Display in the console
    console.log(i + " " + thelist[i]);
  }
}

function gotData() {
  var currentString = serial.readLine();  
  trim(currentString);                    
  if (!currentString) return;             
  console.log(currentString);
      inMessage = split(currentString, '&');  
}

function draw() {
  background(255,192,203);
  fill(0,0,0);
    if (inMessage[1] == 1){
        fill(random(255),random(255),random(255));
    }
  //ellipse(width/2, height/2, map(inMessage[0], 225, 635, 0, width), map(inMessage[0], 225, 635, 0, height));
  
    //head
  fill(255,255,255);
  //stroke(000);
  //strokeWeight(1);
  beginShape();
  vertex(131,158);
  quadraticVertex(128,148,129,133);
  quadraticVertex(141,131,155,137);
  quadraticVertex(178,127,206,128);
  quadraticVertex(218,118,229,117);
  quadraticVertex(234,126,237,142);
  quadraticVertex(260,181,244,210);
  quadraticVertex(222,235,189,236);
  quadraticVertex(153,239,135,213);
  quadraticVertex(127,190,131,158);
  endShape();
  
  //ears/eyes
  fill(255,192,203);
  beginShape();
  vertex(133,136);
  vertex(136,155);
  vertex(151,142);
  vertex(133,136);
  endShape();
  
  beginShape();
  vertex(212,133);
  vertex(230,140);
  vertex(227,121);
  vertex(212,133);
  endShape();
  
  fill(0,0,0);
  ellipse(162,177,18,18);
  ellipse(213,169,18,18);
  fill(250,250,250);
  ellipse(164,174,6,6);
  ellipse(216,166,6,6);
  
  //collar
  fill(220,20,60);
  beginShape();
  vertex(136,215);
  quadraticVertex(133,221,135,232);
  vertex(243,232);
  quadraticVertex(151,250,180,253);
  quadraticVertex(225,258,246,227);
  quadraticVertex(248,216,245,210);
  vertex(136,215);
  endShape();
  
    //ball
  fill(255,215,0);
  ellipse(190,223,13,13);
  
  
  
  //body
  fill(250,250,250);
  beginShape();
  vertex(136,233);
  quadraticVertex(119,285,133,305);
  quadraticVertex(133,317,142,321);
  quadraticVertex(159,324,172,320);
  quadraticVertex(191,325,208,319);
  quadraticVertex(230,325,246,317);
  vertex(247,310);
  quadraticVertex(260,321,271,320);
  quadraticVertex(278,318,279,313);
  quadraticVertex(278,307,269,305);
  quadraticVertex(257,299,254,294);
  quadraticVertex(256,269,245,231);
  endShape();
  
  //MOVING hand
  push();
  //translate(10,-10);
  rotate(map(inMessage[0],650,325,PI/20,0));
  beginShape();
  vertex(248,243);
  quadraticVertex(265,237,270,223);
  vertex(279,165);
  quadraticVertex(280,140,267,140);
  quadraticVertex(255,140,252,152);
  quadraticVertex(257,166,256,185);
  quadraticVertex(253,200,245,211);
  quadraticVertex(246,219,245,232);
  vertex(248,243);
  endShape();
  
    fill(255,192,203);
  //paw
  ellipse(256,152,3,3);
  ellipse(261,148,3,3);
  ellipse(269,148,3,3);
  ellipse(275,153,3,3);
  ellipse(265,155,11,7);
  pop();
  
  //nose
  fill(255,192,203);
  ellipse(190,191,11,7);
  //facedetails
  beginShape();
  vertex(144,158);
  vertex(153,163);
  endShape();
  
  beginShape();
  vertex(138,166);
  vertex(148,169);
  endShape();
  
  beginShape();
  vertex(223,146);
  vertex(216,153);
  endShape();
  
  beginShape();
  vertex(231,150);
  vertex(222,156);
  endShape();
  
  beginShape();
  vertex(154,198);
  vertex(135,198);
  endShape();
  
  beginShape();
  vertex(137,207);
  vertex(153,201);
  endShape();
  
  beginShape();
  vertex(154,208);
  vertex(140,214);
  endShape();
  
  beginShape();
  vertex(229,185);
  vertex(244,179);
  endShape();
  
  beginShape();
  vertex(229,189);
  vertex(247,188);
  endShape();
  
  beginShape();
  vertex(230,196);
  vertex(245,197);
  endShape();
  
  beginShape();
  vertex(151,313);
  vertex(151,319);
  endShape();
  
  beginShape();
  vertex(159,314);
  vertex(159,320);
  endShape();
  
  beginShape();
  vertex(165,312);
  vertex(165,318);
  endShape();
  
  beginShape();
  vertex(186,315);
  vertex(186,320);
  endShape();
  
  beginShape();
  vertex(194,314);
  vertex(194,320);
  endShape();
  
  beginShape();
  vertex(202,312);
  vertex(202,317);
  endShape();
  
  beginShape();
  vertex(216,311);
  vertex(216,318);
  endShape();
  
  beginShape();
  vertex(222,313);
  vertex(222,319);
  endShape();
  
  beginShape();
  vertex(230,312);
  vertex(230,318);
  endShape();

}

function mousePressed(){if (!mySound.isPlaying()){
      mySound.play();
    }
  serial.write("1");
}
function mouseReleased(){
  serial.write("0");
}
