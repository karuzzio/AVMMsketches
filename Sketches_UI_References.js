{
  TODO: B001;
  //Initialise GUI params to be manipulated
  var x;
  var y;
  var colorVar;
  var speed = 30.5;
  var easing = 0.21;
  var easingMax = 2;
  var backgroundColor = "#ffffff";
  var strokeWidth = 1;
  var strokeWidthMax = 25;

  var strokeColor = "#000000";
  var drawStroke = false;
  var drawFill = true;
  var colourVariations = ["Variation 1", "Variation 2", "Variation 3"];
  var c_key_clearCanvas = true;
  // var instructions = "p - hide GUI, c - clear canvas, s - save image"

  var randPosition = random(620, 460);
  // var d =

  //GUI params
  var visible = true;
  var gui;

  function setup() {
    // Initialise canvas
    createCanvas(windowWidth, windowHeight);

    // Choose Colour Mode and background colour
    colorMode(HSB, 360, 100, 100, 20); //colorMode(mode, [max1], [max2], [max3], [maxA])
    background(255);

    // Create GUI layout
    gui = createGui("Controls");
    gui.addGlobals(
      "backgroundColor",
      "speed",
      "easing",
      "drawStroke",
      "strokeWidth",
      "strokeColor",
      "drawFill",
      "colourVariations",
      "shape",
      "c_key_clearCanvas"
    );

    // Random position variables
    x = width / 2;
    y = height / 2;
  }
  function draw() {
    // pick a shape
    switch (colourVariations) {
      case "Variation 1":
        var colorVar = 360 - mouseY / 2;
        break;

      case "Variation 2":
        var colorVar = 360 - mouseX / 2;
        break;

      case "Variation 3":
        var colorVar = 360 - (mouseX + mouseY) / 2;
        break;
    }

    // set fill style
    if (drawFill) {
      fill(colorVar, 100, 100, 5); //fill(v1, [v2], [v3], [a])
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

    x += random(-speed, speed) * easing;
    y += random(-speed, speed) * easing;

    x = constrain(x, 0, width);
    x = constrain(x, 0, height);

    //x += (targetX - x) * easing;
    ellipse(x, y, mouseY / 2, mouseY / 2); //ellipse(x, y, w, [h])
    //print(targetX + " : " + x);
  }

  // check for keyboard events

  // Show/hide GUI
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

  // // pauze/play draw loop
  // if (key == 'f' || key == 'F') freeze = !freeze;
  // if (freeze) {
  //   noLoop();
  // } else {
  //   loop();
  // }
}

{
  TODO: B002;
  // 'use strict';

  //Initialise GUI params to be manipulated
  var NORTH = 0;
  var EAST = 1;
  var SOUTH = 2;
  var WEST = 3;
  var direction = SOUTH;

  var speed = 1;
  var stepSize = 11;
  var minLength = 10;
  var diameter = 1;
  var angleCount = 7;
  var angle;
  var strokeWidth = 3;
  var dotSize = 10;
  var dotColor = [180, 200, 0];
  var strokeColor = [180, 200, 0];

  var reachedBorder = false;

  var posX;
  var posY;
  var posXcross;
  var posYcross;

  //GUI params
  var visible = true;
  var gui;

  function setup() {
    createCanvas(720, 720);
    colorMode(HSB, 360, 100, 100, 20);
    background(360);

    angle = getRandomAngle(direction);
    posX = floor(random(width));
    posY = 5;
    posXcross = posX;
    posYcross = posY;

    // Create GUI layout
    gui = createGui("Controls");
    gui.addGlobals(
      "speed",
      "stepSize",
      "minLength",
      "diameter",
      "angleCount",
      "strokeWidth",
      "dotSize",
      "dotColor",
      "strokeColor",
      "drawFill",
      "colourVariations",
      "shape",
      "c_key_clearCanvas"
    );
  }

  function draw() {
    for (var i = 0; i <= speed; i++) {
      // ------ draw dot at current position ------
      strokeWeight(dotSize);
      stroke(dotColor);
      point(posX, posY);

      // ------ make step ------
      posX += cos(radians(angle)) * stepSize;
      posY += sin(radians(angle)) * stepSize;

      // ------ check if agent is near one of the display borders ------
      reachedBorder = false;

      if (posY <= 5) {
        direction = SOUTH;
        reachedBorder = true;
      } else if (posX >= width - 5) {
        direction = WEST;
        reachedBorder = true;
      } else if (posY >= height - 5) {
        direction = NORTH;
        reachedBorder = true;
      } else if (posX <= 5) {
        direction = EAST;
        reachedBorder = true;
      }

      // ------ if agent is crossing his path or border was reached ------
      loadPixels();
      var currentPixel = get(floor(posX), floor(posY));
      if (
        reachedBorder ||
        (currentPixel[0] != 255 &&
          currentPixel[1] != 255 &&
          currentPixel[2] != 255)
      ) {
        angle = getRandomAngle(direction);

        var distance = dist(posX, posY, posXcross, posYcross);
        if (distance >= minLength) {
          strokeWeight(strokeWidth);
          stroke(strokeColor);
          line(posX, posY, posXcross, posYcross);
        }

        posXcross = posX;
        posYcross = posY;
      }
    }
  }

  function getRandomAngle(currentDirection) {
    var a = ((floor(random(-angleCount, angleCount)) + 0.5) * 90) / angleCount;
    if (currentDirection == NORTH) return a - 90;
    if (currentDirection == EAST) return a;
    if (currentDirection == SOUTH) return a + 90;
    if (currentDirection == WEST) return a + 180;
    return 0;
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
}
