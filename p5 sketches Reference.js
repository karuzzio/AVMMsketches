// Every sketch exists in a function draw() block. Colors and lines not included, generally

TODO: A001
// Grid of Dots with connected line that follows mouse position
for (var y = 20; y <= height - 20; y += 10) {
    for (var x = 20; x <= width - 20; x += 10) {
      ellipse(x, y, 4, 4);
      // Draw a line to the center of the display
      line(x, y, mouseX, mouseY);
    }
  }

{TODO: A002
// Continuous line that changes thickness based on mouse speed

var x = 0;
var y = 0;
var px = 0;
var py = 0;
var easing = 0.05;

function setup() {
    createCanvas(480, 120);
    stroke(0, 102);
}
function draw() {
    // var weight = dist(mouseX, mouseY, pmouseX, pmouseY); // Calculates speed of two points
    var targetX = mouseX; x += (targetX - x) * easing;
    var targetY = mouseY; y += (targetY - y) * easing;
    var weight = dist(x, y, px, py);
    strokeWeight(weight);
    line(x, y, px, py);
    py = y;
    px = x; }
}

{TODO: A003
// Tracked circle stroke follows mouse. Sie changes based on mouseY. Easing creates smooth movement
var x = 0;
var easing = 0.21;
function setup() {
  createCanvas(640, 480);
}
function draw() {
  var targetX = mouseX;
  x += (targetX - x) * easing;
  ellipse(x, mouseY, mouseY, mouseY);
  print(targetX + " : " + x);
}
}

{TODO: A004
//Move square with arrow keys
var x = 215;
var y = 40;
function setup() {
  createCanvas(480, 120);
}

function draw() {
  if (keyIsPressed) {
    if (keyCode == LEFT_ARROW) {
      x--;
    } else if (keyCode == RIGHT_ARROW) {
      x++;
    } else if (keyCode == UP_ARROW) {
      y--;
    } else if (keyCode == DOWN_ARROW) {
      y++;
    }
  }
  noFill();
  rect(x, y, 50, 50);
}
}

{TODO: A005
var angle = 0.0;

function setup() {
  createCanvas(400, 400);
  background(204);
}
function draw() {
  translate(mouseX, mouseY);
  rotate(angle);
//   scale(mouseX / 60.0);
  rectMode(CENTER);
  rect(0, 0, 60, 60); //rect(x, y, w, h, [tl], [tr], [br], [bl])
  angle += 0.1;
}
}

{TODO: A006
var x = 0;
var easing = 0.21;
function setup() {
  createCanvas(640, 480);
  colorMode(HSB, 360, 100, 100, 20); //colorMode(mode, [max1], [max2], [max3], [maxA])
}
function draw() {
  var targetX = mouseX;
  x += (targetX - x) * easing;
  fill(360 - mouseY / 2, 100, 100, 5); //fill(v1, [v2], [v3], [a])
  noStroke();
  ellipse(x, mouseY, mouseY, mouseY);
  print(targetX + " : " + x);
}
}

{TODO: A007
    var x;
    var y;
    var speed = 30.5;
    var diameter = 20;
    var easing = 0.21;
    
    var randPosition = random(620, 460);
    
    function setup() {
      createCanvas(640, 480);
      colorMode(HSB, 360, 100, 100, 20); //colorMode(mode, [max1], [max2], [max3], [maxA])
      x = width / 2;
      y = height / 2;
      background(204);
    }
    function draw() {
      x += random(-speed, speed) * easing;
      y += random(-speed, speed) * easing;
      
      x=constrain(x, 0, width)
      x=constrain(x, 0, height)
    
      //x += (targetX - x) * easing;
      fill(360 - mouseY / 2, 100, 100, 5); //fill(v1, [v2], [v3], [a])
      noStroke();
      ellipse(x, y, mouseY / 2, mouseY / 2); //ellipse(x, y, w, [h])
      //print(targetX + " : " + x);
    }
}

{TODO: A008
    var angle = 0.0;
    var offset = 200;
    var scalar = 90;
    var speed = 0.05;
    var x = -50;
    function setup() {
      createCanvas(640, 480);
    }
    function draw() {
      // background(0);
      var y1 = constrain(offset + sin(angle) * scalar, 0, height);
      var y2 = offset + sin(angle + 0.4) * scalar;
      var y3 = offset + sin(angle + 0.8) * scalar;
      noFill();
      ellipse(x, y1, 40, 40);
      // ellipse(x, y2, 40, 40);
      // ellipse(x, y3, 40, 40);
      angle += speed;
      x++;
    }
    
}

{TODO: A009
var angle = 0.0;
var offset = 200;
var scalar = 90;
var speed = 0.05;
var x = -50;
function setup() {
  createCanvas(640, 480);
}
function draw() {
  // background(0);
  var y1 = constrain(offset + sin(angle) * scalar, 0, height);
  var y2 = offset + sin(angle + 0.4) * scalar;
  var y3 = offset + sin(angle + 0.8) * scalar;
  noFill();
  ellipse(x, y1, mouseY, mouseY);
  // ellipse(x, y2, 40, 40);
  // ellipse(x, y3, 40, 40);
  angle += speed;
  x++;
}
}

{TODO: A010
    var angle = 0.0;
    var offset = 60;
    var scalar = 2;
    var speed = 0.05;
    function setup() {
      createCanvas(500, 500);
      fill(0);
      background(204);
    }
    function draw() {
      var x = offset + cos(angle) * scalar;
      var y = offset + sin(angle) * scalar;
      ellipse(x, y, 2, 2);
      angle += speed;
      scalar += speed;
    }   
}

{TODO: A012
// Jitterbug Arrays
var bugs = [];
var numOfBugs = 25;

function setup() {
  createCanvas(640, 480);
  colorMode(HSB, 360, 100, 100, 20);
  background(240);
  for (var i = 0; i < numOfBugs; i++) {
    var x = random(width);
    var y = random(height);
    var r = i + 25;
    bugs[i] = new JitterBug(x, y, r);
  }
}

function draw() {
  // noStroke()
  strokeWeight(0.5);
  // stroke(255);
  fill(360 - mouseY / 1.5, 100, 100, 5);
  for (var i = 0; i < bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
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
}

{TODO: A013
var sine;
var freq = 400;
function setup() {
  createCanvas(440, 440);
  // Create and start the sine oscillator
  sine = new p5.SinOsc();
  sine.start();
}
function draw() {
  background(0);
  // Map the mouseX value from 20Hz to 440Hz for frequency
  var hertz = map(mouseX, 0, width, 20.0, 440.0);
  sine.freq(hertz);
  // Draw a wave to visualize the frequency of the sound
  stroke(204);
  for (var x = 0; x < width; x++) {
    var angle = map(x, 0, width, 0, TWO_PI * hertz);
    var sinValue = sin(angle) * 120;
    line(x, 0, x, height / 3 + sinValue);
  }
}
}

{TODO: A014
var slider;
var colSlider;

var angle = 0.0;
var offset = 200;
var scalar = 100;
var speed = 0.08;
var x = -50;

function setup() {
  createCanvas(640, 480);
  colorMode(HSB, 360, 100, 100, 20); //colorMode(mode, [max1], [max2], [max3], [maxA])

  // Diameter Slider
  slider = createSlider(0, 255, 100);
  slider.position(20, 400);
  textSize(14);
  text("Diameter", 20, 400);

  // Colour Slider
  colSlider = createSlider(0, 360, 100);
  colSlider.position(200, 400);
  textSize(14);
  text("Colour", 200, 400);
}

function draw() {
  // background(0);
  var diameter = slider.value();
  var colour = colSlider.value();
  var y1 = constrain(offset + sin(angle) * scalar, 0, height);
  fill(colour, 100, 100, 70); //fill(v1, [v2], [v3], [a])

  // noStroke();
  // noFill();
  ellipse(x, y1, diameter, diameter);
  // ellipse(x, y2, 40, 40);
  // ellipse(x, y3, 40, 40);
  angle += speed;
  x++;
}
}

{TODO: A015
var c = 20;
var pint = [];


function setup() {
  createCanvas(600, 600);
  for (var i = 0; i < c; i++) {
    pint[i] = new Pint(map(i, 0, c, 0, TWO_PI));
  }
  smooth();
  background(255);
}
function draw() {
  //background(255);

  for (var i = 0; i < c; i++) {
    pint[i].update();
  }
  beginShape();
  curveVertex(pint[c - 2].x, pint[c - 2].y);
  curveVertex(pint[c - 1].x, pint[c - 1].y);
  for (var i = 0; i < c; i++) {
    curveVertex(pint[i].x, pint[i].y);
  }
  curveVertex(pint[0].x, pint[0].y);
  endShape();
}

function Pint(a) {
  this.theta = a;
  this.x;
  this.y;
  this.magnitude = 0.1;
  this.omega = 0.1;
  this.time = 0.1;
  this.timestep = 0.1;



  this.update = function () {
    this.time += this.timestep;
    this.omega = noise(this.theta, this.time + 1) / 5;
    this.magnitude = noise(this.theta, this.time + 2) * (sin(radians(this.time)) * 200);
    this.x = round(this.magnitude * cos(this.theta + this.omega) + mouseX);
    this.y = round(this.magnitude * sin(this.theta + this.omega) + mouseY);
  }
}

function keyPressed() {
  background(255);
}
}

{TODO: A016
// graphics
var numshimmers;
var totshimmers = 4;
var noters = [];
var systems = [];

// no particle system instantiated in setup()
function setup() {
  createCanvas(700, 500);

  numshimmers = 0;
  for (i = 0; i < totshimmers; i++) noters[i] = new Notarize();

  Tone.Transport.start();
}

function draw() {
  background(1); // black background

  for (i = 0; i < numshimmers; i++) {
    systems[i].addParticle();
    systems[i].run();
  }
}

function mousePressed() {
  // start up a particle system is the mouse is initializing it

  if (++numshimmers > totshimmers) {
    numshimmers = 0;
    for (i = 0; i < totshimmers; i++) noters[i].stop();
  } else {
    systems[numshimmers - 1] = new ParticleSystem(createVector(mouseX, mouseY));
    var freq = (mouseX / 700) * 2000 + 1000;
    noters[numshimmers - 1].go(freq);
  }
}

// A simple Particle class
var Particle = function (position) {
  // change accelearation to get particles going all sides
  this.acceleration = createVector(0, 0.0);
  this.velocity = createVector(random(-1, 1), random(-1, 1));
  this.position = position.copy();
  this.lifespan = 255.0;
};

Particle.prototype.run = function () {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function () {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// use Tone.CtrlRandom to randomize the colors
var randcolor = new Tone.CtrlRandom(0, 255);
// Method to display
Particle.prototype.display = function () {
  stroke(randcolor.value, randcolor.value, randcolor.value, this.lifespan); // change color of particle outlines
  strokeWeight(1); // make the outline smaller
  fill(randcolor.value, randcolor.value, randcolor.value, this.lifespan); // change color of particle interiors
  ellipse(this.position.x, this.position.y, 7, 7); // smalle particles
};

// Is the particle still useful?
Particle.prototype.isDead = function () {
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};

var ParticleSystem = function (position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function () {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function () {
  for (var i = this.particles.length - 1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};

// audio
Notarize = function () {
  var mysynth = new Tone.FMSynth({
    envelope: {
      attack: 0.01,
      decay: 0.01,
      sustain: 1,
      release: 0.1,
    },
    modulationEnvelope: {
      attack: 0.01,
      decay: 0,
      sustain: 1,
      release: 0.1,
    },
  });

  mydelay1 = new Tone.PingPongDelay(0.2, 0.8);
  mydelay2 = new Tone.PingPongDelay(0.14, 0.8);

  mysynth.connect(mydelay1);
  mydelay1.connect(mydelay2);
  mydelay2.toMaster();

  var keepgoing = 0;
  var freq;
  this.go = function (f) {
    freq = f;
    keepgoing = 1;
    makenote();
  };

  this.stop = function () {
    keepgoing = 0;
  };

  var randsched = new Tone.CtrlRandom(0.1, 0.3);
  function makenote() {
    mysynth.triggerAttackRelease(freq, 0.05);
    if (keepgoing == 1)
      Tone.Transport.schedule(makenote, "+" + randsched.value);
  }
};
}

{TODO: A017 Exploding typed text;
var field;
var button;
var letters = [];
function setup() {
  createCanvas(400, 300);
  field = createInput("your text");
  button = createButton("Explode!!");
  button.mousePressed(explodeText);
}
function draw() {
  background(50);
  fill(255);
  noStroke();
  textSize(24);
  for (var i = 0; i < letters.length; i++) {
    text(letters[i].letter, letters[i].xpos, 
      letters[i].ypos);
    letters[i].xpos += letters[i].xdir;
    letters[i].ypos += letters[i].ydir;
  }
}
function explodeText() {
  textSize(24);
  var text = field.value();
  var currentPos = random(width/2);
  for (var i = 0; i < text.length; i++) {
    var letterObj = {
      letter: text.charAt(i),
      ypos: 50,
      xpos: currentPos,
      xdir: random(-1, 1),
      ydir: random(-0.5, 2)
    };
    letters.push(letterObj);
    currentPos += textWidth(text.charAt(i));
  }
}
}

{TODO: A018 Tonejs multiple sample player with effects and keyboard triggers
// Play music samples with keyboard triggers

// Declare variables for audio FX
let delay;
let reverb;

let wetMix;

// Create a Players object and load the sample files
var kit = new Tone.Players({
  lead: "/p5 Boilerplate/empty-example/samples/Lead.mp3",
  chords: "/p5 Boilerplate/empty-example/samples/Chords.mp3",
  perc: "/p5 Boilerplate/empty-example/samples/Perc.mp3",
  kick: "/p5 Boilerplate/empty-example/samples/Kick.mp3",
}).toMaster();

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Define audio FX
  // volume = new Tone.Volume(-10); // in decibels
  delay = new Tone.FeedbackDelay(0.25, 0.5).toMaster(); //new Tone.FeedbackDelay ( [ delayTime ] , [ feedback ] )
  reverb = new Tone.JCReverb(0.5).toMaster(); //new Tone.Reverb ( [ decay ] )
  trem = new Tone.Tremolo(4, 0.6).toMaster().start(); //new Tone.Tremolo ( [ frequency ] , [ depth ] )
  chorus = new Tone.Chorus(1.5, 3.5, 0.7); //new Tone.Chorus ( [ frequency ] , [ delayTime ] , [ depth ] )

  // Connect FX to Samples
  // kit.get("perc").connect(volume);
  // kit.get("chords").connect(volume);
  // kit.get("lead").connect(volume);
  // kit.get("kick").connect(volume);

  kit.get("lead").connect(delay);

  kit.get("lead").connect(reverb);
  kit.get("chords").connect(reverb);

  kit.get("lead").connect(chorus);
  kit.get("perc").connect(chorus);



  // Create UI slider for FX
  delayWetmix = createSlider(0, 1, 1, 0);
  delayWetmix.position(100, 50);

  reverbWetmix = createSlider(0, 1, 1, 0);
  reverbWetmix.position(100, 100);

  chorusWetmix = createSlider(0, 1, 1, 0);
  chorusWetmix.position(100, 150);

  //Volume FX control
  // volumeMix = createSlider(0, 10, 1, 0);
  // volumeMix.position(100,100)
}

function draw() {
  background(255);

  // Create text for Delay FX slider and link value to Delay FX value
  delay.wet.value = delayWetmix.value();
  textSize(10);
  fill("black");
  text(int(delayWetmix.value() * 100) + "% Delay", 105, 50);

  // Create text for Reverb FX slider and link value to Delay FX value
  reverb.wet.value = reverbWetmix.value();
  textSize(10);
  fill("black");
  text(int(reverbWetmix.value() * 100) + "% Reverb", 105, 100);

  // Create text for Chorus FX slider and link value to Delay FX value
  chorus.wet.value = chorusWetmix.value();
  textSize(10);
  fill("black");
  text(int(chorusWetmix.value() * 100) + "% chorus", 105, 150);

  // Volume Slider Value
  // kit.volume.value = volumeMix.value();
}

function keyPressed() {
  if (keyIsDown(UP_ARROW)) {
    kit.get("kick").start();
  } else if (keyIsDown(RIGHT_ARROW)) {
    kit.get("perc").start();
  } else if (keyIsDown(LEFT_ARROW)) {
    kit.get("chords").start();
  } else if (keyIsDown(DOWN_ARROW)) {
    kit.get("lead").start();
  } else if (keyIsDown(96)) {
    kit.stopAll();
  }
}


}