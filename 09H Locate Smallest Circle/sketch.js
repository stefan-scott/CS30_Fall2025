// Find the Smallest Circle
// Mr. Scott
// October 1, 2025

let NUM_CIRCLES = 40;
let seed;
let squareX;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // drawCircles();
  seed = random(100);
  squareX = width/2;
}

function draw() {
  randomSeed(seed);
  background(220);
  drawCircles();
  square(squareX, height/2, 200);
}

function keyPressed(){
  if (keyCode === LEFT_ARROW){
    squareX -= 25;
  }
  if(keyCode === RIGHT_ARROW){
    squareX += 25;
  }
}

function drawCircles(){
  //draw some random circles
  noFill();
  let smallestDiameter = Infinity;
  let smallestX = -1;
  let smallestY = -1;
  for (let i = 0; i < NUM_CIRCLES; i++){
    let x = random(0, width);
    let y = random(0, height);
    let d = random(20, 100);

    if(d < smallestDiameter){
      smallestDiameter = d;
      smallestX = x;
      smallestY = y;
    }

    circle(x,y,d);
  }
  // at this point we should have access
  // to the smallest circle
  fill(255,0,0);
  circle(smallestX, smallestY, smallestDiameter);

}
