// Classes and Objects (Books)
// Mr. Scott
// Oct 15, 2025

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}

// typically organize class to bottom
class Book{
  //1. constructor
  constructor(title, author, isbn, cover, pages, x){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.cover = cover;
     //"softcover", "hardcover", "leatherbound"
    this.pages = pages;
    this.x = x;
    this.pickedUp = false;
  }

  //2. class methods
  display(){
    //render our book object on the canvas
    rectMode(CENTER);  textAlign(CENTER,CENTER);
    textSize(20);

    //set fill color based on cover type
    switch (this.cover){
      case "softcover":
        fill(250, 200, 150);  break;
      case "hardcover":
        fill(120, 255, 255);  break;
      case "leatherbound":
        fill(150, 100, 15);  break;
    }  

    //now, draw the book elements
    push();
    translate(this.x, height/2);
    rect(0,0,this.pages / 10, 150);
    fill(255);
    text(this.title[0], this.x, height/2 - 50);
    pop();
  }



}

