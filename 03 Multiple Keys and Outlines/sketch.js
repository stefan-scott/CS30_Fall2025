// Multiple Keys and Outlines
// Mr. Scott
// September 15, 2025
// one line description

//keyIsDown( keycode ) → returns boolean

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220); //fills in the background
  checkMulti();
}

function checkMulti(){
  //there should be a comment at the top of each function
  //inputs/outputs
  //the purpose of the function

  strokeWeight(mouseX / 10);
  stroke(255,0,0);

  //check for multiple keypresses (3 simulateneous)
  let a = keyIsDown(65); //"a"
  let b = keyIsDown(66); //"b"
  let c = keyIsDown(67); //"c"

  //display our results on the canvas
  textSize(40);
  text("a:" + a + "\tb:" + b + "\tc:" + c, 100, 300);
}
