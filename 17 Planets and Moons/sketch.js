// Planets and Moons
// Mr. Scott
// Oct 17, 2025
// Objects within Objects
// Overwriting Objects, basic transform

// Global Variables
let myPlanet;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(70);
}

class Planet{
  //constructor
  constructor(x,y){
    this.x = x;   this.y = y;  this.s = 100;
    this.moons = [];
  }

  //class methods
  display(){
    //draw the planet + all of its moons
    circle(this.x, this.y, this.s);

    //for the moons
    for (let m of moons){
      //!!!!! FILL IN LATER !!!!!
    }
  }
}
