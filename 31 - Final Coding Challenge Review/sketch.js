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

}

function draw() {
  background(220);
}
