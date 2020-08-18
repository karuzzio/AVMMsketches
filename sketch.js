//Initialise GUI params to be manipulated
var rad = 0; //Rads to keep track of rotation angle
var numOfCircles = 20; //How long the spiral will be
var circleSize = 15;
var backgroundColor = 255;
var backgroundOpacity = 16;
var speed = 32;
var drawStroke = false;
var drawFill = true;
var circleOpacity = 200;
var circleOpacityMin = 10;
var circleOpacityMax = 255;
var patternVariation = 2;
var patternVariationMax = 1;
var patternVariationMax = 100;

var strokeColor = "#000000";
var strokeWidth = 1;

var changeDirection = false;

//GUI params
var visible = true;
var gui;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(backgroundColor);
  ellipseMode(CENTER);
  colorMode(HSB, 256);

  // Create GUI layout
  gui = createGui("Controls");
  gui.addGlobals(
    "backgroundColor",
    "backgroundOpacity",
    "speed",
    "numOfCircles",
    "circleSize",
    "drawStroke",
    "strokeWidth",
    "strokeColor",
    "drawFill",
    "circleOpacity",
    "changeDirection",
    "patternVariation"
  );
}

function draw() {
  translate(width / 2, height / 2);

  background(backgroundColor, backgroundOpacity); //background black each frame with a transparancy of 16/256 = 1/16
  // set fill style
  if (drawFill) {
    fill(map(rad, 0, 2 * PI, 0, 255), 255, 200, circleOpacity);
  } else {
    noFill();
  }

  // set stroke style
  if (drawStroke) {
    stroke(strokeColor);
    strokeWeight(strokeWidth);
  } else {
    noStroke();
  }

  for (let i = 0; i < numOfCircles; i++) {
    let newRad = rad + map(i, 0, numOfCircles, 0, patternVariation * PI);
    let radius = i * circleSize + circleSize / 2;

    if (changeDirection) {
      ellipse(
        cos(-newRad + PI) * radius,
        sin(-newRad + PI) * radius,
        circleSize,
        circleSize
      );
    } else {
      ellipse(
        cos(newRad) * radius,
        sin(newRad) * radius,
        circleSize,
        circleSize
      );
    }
  }

  rad += PI / speed;
  if (rad > 2 * PI) rad = 0;
}

// check for keyboard events
function keyPressed() {
  switch (key) {
    case "p":
      visible = !visible;
      if (visible) gui.show();
      else gui.hide();
      break;
    case "c":
      clear();
      break;
    case "s":
      saveCanvas("mySketch", "png");
      break;
    case "f":
      freeze = !freeze;
      if (freeze) {
        noLoop();
      } else {
        loop();
      }
  }
}
