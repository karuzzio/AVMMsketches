// ForLoop Structure

for (init; test; update) {
  statements;
}

var lightEmit = "On"
var lightEmit = "On"
var lightEmit = "On"
var lightEmit = "On"
var lightEmit = "On"

function newFujntio() {
    if (condition) {
        
    } else {
        
    }
}
 lightEmit.replace ()


 var slider;
 function setup() {
 createCanvas(480, 120);
 slider = createSlider(0, 255, 100);
 slider.position(20, 20);
 }
 function draw() {
 var gray = slider.value();
 background(gray);
 }



 // Jitterbug Arrays
var bugs = [];
var numOfBugs = 25;
var mic;

function setup() {
  createCanvas(640, 480);
  colorMode(HSB, 360, 100, 100, 20);
  background(240);

  mic = new p5.AudioIn();
  mic.start();

  for (var i = 0; i < numOfBugs; i++) {
    var x = random(width);
    var y = random(height);
    var r = i + 25;
    bugs[i] = new JitterBug(x, y, r);
  }
}

function draw() {
  micLevel = mic.getLevel(0.9);
  // noStroke()
  strokeWeight(0.5);
  // stroke(255);
  fill(360 - mouseY / 1.5, 100, 100, 5);

  for (var x = 0; x < width; x += 5) {
    var noiseVal = noise((micLevel + x) * 200, micLevel * 300);
    stroke(noiseVal * 200);
    line(x, height, x, micLevel * 100 + noiseVal * 1800);
  }

  for (var i = 0; i < bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }

  print(micLevel);
  print(noiseVal);
}

// Constructor object definition
function JitterBug(tempX, tempY, tempDiameter) {
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.speed = 2.5;
  this.move = function () {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };
  this.display = function () {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}

