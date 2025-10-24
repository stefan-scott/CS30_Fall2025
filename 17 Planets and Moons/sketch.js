// Planets and Moons
// Mr. Scott
// Oct 17, 2025
// Objects within Objects
// Overwriting Objects, basic transform

// On-Your-Own Challenge. Try to Add:
//
// Add some style to the planet/moons (color, trail effect)
// Stars in the background → create Star class, use array
// Multiple Planets... which planet gets the moon
// or
// something cool you devise of your own

// Global Variables
let myPlanet;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  myPlanet = new Planet(width / 2, height / 2);
}

function draw() {
  background(70);
  myPlanet.display();
}

function mousePressed() {
  //regular click → add a moon
  //shift click → destroy and reset the moon
  if (keyIsPressed && keyCode === SHIFT) {
    myPlanet = new Planet(width / 2, height / 2);
  }
  else {
    myPlanet.createMoon();
  }
}

function keyPressed() {
  if (keyCode !== SHIFT) {
    myPlanet.x = mouseX;
    myPlanet.y = mouseY;
  }
}


class Planet {
  //constructor
  constructor(x, y) {
    this.x = x; this.y = y; this.s = 100;
    this.moons = [];
  }

  //class methods

  createMoon() {
    this.moons.push(new Moon(this.x, this.y));
  }

  display() {
    //draw the planet + all of its moons
    circle(this.x, this.y, this.s);

    //for the moons
    for (let m of this.moons) {
      m.update(this.x, this.y);
    }
  }
}

class Moon {
  constructor() {
    this.speed = random(1, 5);
    this.angle = 0; this.orbitRadius = random(80, 250);
    this.s = random(5, 50);
    this.r = random(100,200);
    this.g = random(150,250);
    this.b = random(100,150);
    
  }

  display(x, y) {
    //includes some extras related to color trails
    for (let a = 30; a >= 0; a--) {
      push();
      translate(x, y);
      rotate(this.angle - a);
      noStroke();
      let c = color(this.r, this.g, this.b,map(a, 0, 30, 150, 0))
      fill(c);
      if (a === 0) {
        fill(this.r, this.g, this.b);
        stroke(0);
      }

      circle(this.orbitRadius, 0, this.s);
      pop();
    }

  }

  move() {
    this.angle += this.speed;
  }

  update(x, y) {
    // helper function to handle calling the
    // class methods internally
    this.move();
    this.display(x, y);
  }
}




