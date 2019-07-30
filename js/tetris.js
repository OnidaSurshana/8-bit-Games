//get the canvas from html
const cvs = document.getElementById("tetris");
//context of the canvas
const ctx = cvs.getContext("2d");

//create a variable for the row and column 
const ROW = 20;
const COL = COLUMN = 10;
const SQ = squareSize = 20;

//since theyre are going to be squares that wont actually be counted set them to a invisible color
const VACANT = "WHITE";

//next you should actually create the shaped, use https://www.w3schools.com/tags/canvas_fillrect.asp this method
// ctx.fillStyle = "red";
// ctx.fillRect(0,0,50,50);

//next do the strokes
// ctx.strokeStyle = "black";
// ctx.strokeRect(0,0,50,50);

//you might want to put that code into a function, i assume you'll need it often
function drawSquare(x,y,color) {
  // use color instead of typing out every color
  ctx.fillStyle = color;
  //use x & y variables for the locations instead of numbers
  ctx.fillRect(x*SQ,y*SQ,SQ,SQ);

  //make a square variable and use it in place of the size numbers
  ctx.strokeStyle = "BLACK";
  ctx.strokeRect(x*SQ,y*SQ,SQ,SQ);
}

//Dario sudgested making the canvas itself an empty array

let board = [];
//create the rows with a loop
for ( r = 0; r < ROW; r++){
board[r] = [];
//create the colors with a loop
for (c = 0; c < COL; c ++){
//white for now
board[r][c] = VACANT;
  }
}

//then draw the board on the canvas
function drawBoard(){
  for( r = 0; r < ROW; r++){
    for(c = 0; c < COL; c++){
      drawSquare(c,r,board[r][c]);
    }
  }
}
//call the draw board function(this might cange if you decide to do a co op tetris)
drawBoard();

//piece colors
//write an array inside an array for the colors.
const PIECES = [
//make the Z blocks red
[Z, "red"],
//s is green probably
[S, "green"],
//purple T
[T, "purple"],
//yellow 0
[O, "yellow"],
//orange L
[L, "orange"],
// Unsure color of I
[I, "turquoise"],
//Blue jay (:
[J, "blue"], 
];

//initiate the pieces

function randomPiece(){
  let r = randomN = Math.floor(Math.random() * PIECES.length) //0-6
  return new Piece(PIECES[r][0],PIECES[r][1])
}
let p = randomPiece();


//create the piece (think theyre called tetrominos)
function Piece(tetromino,color) {
  this.tetromino = tetromino;
  this.color = color;
  //start from the first pattern 
  this.tetrominoN = 0;
  this.activeTetromino = this.tetromino[this.tetrominoN];//tetrominoN is the tetromino number

  //set up the controls for the pieces
  this.x = 0;
  this.y = 0;
}

//fill 
//just copy past the code from bellow
//you can replace the code bellow after with a call to this fuction
Piece.prototype.fill = function(color){
  //just copy paste the for loop from a couple lines up and change some stuff
  for( r = 0; r < this.activeTetromino.length; r++){
    for(c = 0; c < this.activeTetromino.length; c++){
      //draw only filled squares
      if( this.activeTetromino[r][c]){
        drawSquare(this.x + c,this.y + r, color);
      }
    }
  }
}

//draw the pieces to the board
Piece.prototype.draw = function(){
  //just copy paste the for loop from a couple lines up and change some stuff
  this.fill(this.color);
}
//call the draw thing
// p.draw();

//undraw so it doesnt smudge
Piece.prototype.unDraw = function(){
  //just copy paste the for loop from a couple lines up and change some stuff
  this.fill(VACANT);
}

//to make the piece move we need to change the x and y vars above so... more loops! yay -_-

//move piece down 
Piece.prototype.moveDown = function() {
  if(!this.collision(0,1,this.activeTetromino)){
//constant fall
this.unDraw();
this.y++;
this.draw();
  }else{
      //lock it in
      p = randomPiece();
  }

}

//slide to the right

Piece.prototype.moveRight = function() {
  if(!this.collision(1,0,this.activeTetromino)){
  //constant fall
  this.unDraw();
  this.x++;
  this.draw();
}
}

//slide to the left
Piece.prototype.moveLeft = function() {
  if(!this.collision(-1,0,this.activeTetromino)){
  //constant fall
  this.unDraw();
  this.x--;
  this.draw();
}
}
//cha cha real smooth
Piece.prototype.rotate = function() {
  let nextPattern = this.tetromino[(this.tetrominoN + 1)%this.tetromino.length];
  if(!this.collision(0,0,nextPattern)){
  //constant fall
  this.unDraw();
  //move 1 up in array 
  this.tetrominoN = (this.tetrominoN + 1)%this.tetromino.length;
  this.activeTetromino = this.tetromino[this.tetrominoN];
  this.draw();
}
}

//collision detection
Piece.prototype.collision = function(x,y,piece){
for( r = 0; r < piece.length; r++){
  for( c = 0; c < piece.length; c++){
    //check for if the square is filled or empty
    if(!piece[r][c]){
      continue;
    }
    //location of piece after moving
    let newX = this.x + c + x;
    let newY = this.y + r + y;

    //now we set a bunch of rules
    if(newX < 0 || newX >= COL || newY >= ROW){
      return true;
    }
    if(newY < 0){
      continue;
    }
    if( board[newY][newX] !=VACANT){
      return true;
    }
  }
}
}
//event listener for controls
document.addEventListener("keydown", CONTROL);

function CONTROL(event) {
  if(event.keyCode == 37){
p.moveLeft();
  }else if(event.keyCode === 38){
p.rotate();
  }else if(event.keyCode === 39){
p.moveRight();
  }else if(event.keyCode = 40){
p.moveDown();
  }
}


//fall once every tick
let dropStart = Date.now();
function drop() {
  let now = Date.now();
  let delta = now - dropStart;
  //1000 mil secs
  if (delta > 1000){
    p.moveDown();
    dropStart = Date.now();
  }
  requestAnimationFrame(drop);
}
drop();