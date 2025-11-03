// 2D Array Basics
// Mr. Scott
// Nov 3, 2025

// 0 (black)     255 (white)
// grid is 5 x 4 in dimension

let grid = [
  [0,     0,   0,  255,   0],
  [255,   0, 255,    0, 255],
  [255, 255,   0,  255, 255],
  [0,   255,   0,    0,   0]
];

let rows = grid.length;
let cols = grid[0].length;

let squareSize = 60;

function setup() {
  createCanvas(cols*squareSize, rows*squareSize);
}

function draw() {
  background(220);
  renderGrid();
}

function renderGrid(){
  // interpret the information in the 2D array, and draw
  // a grid of square on the screen to reflect it.
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      let fillColor = grid[y][x];
      fill(fillColor);
      square(x*squareSize,y*squareSize,squareSize);
    }
  }
}
