// Working with Vectors
// Mr. Scott
// Nov 21, 2025
// Useful for modeling forces...

let objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);

  if(mouseIsPressed){
    objects.push(new Ball(mouseX, mouseY));
  }

  for (let o of objects){
    //if(keyIsDown(32)){
      o.move();
    //}
    //o.calcMouse();
    o.display();
  }
}

class Ball{
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = createVector(random(-5,5), -5);
    this.grav = createVector(0,0.2); //MOUSE ATTRACTOR
  }

  calcMouse(){
    //mouse vector "attractor" calculations
    this.grav = createVector(mouseX, mouseY);
    this.grav.sub(this.pos);
    this.grav.normalize(); //set hyp 1
    this.grav.mult(4); //increase by scale 4
  }

  move(){
    //update the velocity and position vectors
    this.vel.add(this.grav);
    this.vel.limit(20); //can't go outside -20 and 20
    this.pos.add(this.vel);
    
    //wall bounce
    if(this.pos.x < 0 || this.pos.x > width){
      this.vel.x *= -1;
    }

    //floor bounce
    if(this.pos.y > height){
      this.vel.y *= -1;
    }

  }

  display(){
    //display Ball
    circle(this.pos.x, this.pos.y, 20);

    //display vectors
    if (false){ //??
      stroke(255,0,0);
      line(0,0,this.pos.x, this.pos.y);

      let endX = this.pos.x + this.vel.x;
      let endY = this.pos.y + this.vel.y;

      stroke(0,0,255);
      line(this.pos.x, this.pos.y, endX, endY);

      stroke(0,255,0);
      line(endX, endY, endX + this.grav.x, endY + this.grav.y);
      
    }
  }






}
