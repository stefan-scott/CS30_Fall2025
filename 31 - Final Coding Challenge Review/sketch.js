// Final Coding Review

// --- globals variables ---
let gorillaIdle = [];
let gorillaSwipe = [];
let spiralImages = [];

// (Gorilla Related)
let idleIndex = 0;  let swipeIndex = 0;
let gorillaState = 0; //0-idle  1-swipe
let gorillaX = 200;

// (Spiral Related)
let spiralObjects = [];


async function setup() {
  createCanvas(windowWidth, windowHeight);
  await loadAssets();
}

async function loadAssets(){
  //Circles First
  for(let i=0; i<=15; i++){
    if(i < 10){
      spiralImages.push(loadImage("assets/Circle/circle0"+i+".png"));
    }
    else{
      spiralImages.push(loadImage("assets/Circle/circle"+i+".png"));
    }
  }

  //Gorillas Next
  for(let i = 1; i<=6; i++){
    gorillaIdle.push(loadImage("assets/Gorilla/idle"+i+".png"));
    gorillaSwipe.push(loadImage("assets/Gorilla/swipe"+i+".png"));
  }

}

function draw() {
  background(220);
}
