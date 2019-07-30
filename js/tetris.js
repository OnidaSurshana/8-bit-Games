//Create arrays within arrays for the I/Line shape and every possible rotation (must be 4x4)

//Create arrays within arrays for the J shape and every possible rotation (must be 3x3)
// const J = [
// 	[
// 		[1, 0, 0],
// 		[1, 1, 1],
// 		[0, 0, 0]
// 	],
// 	[
// 		[0, 1, 1],
// 		[0, 1, 0],
// 		[0, 1, 0]
// 	],
// 	[
// 		[0, 0, 0],
// 		[1, 1, 1],
// 		[0, 0, 1]
// 	],
// 	[
// 		[0, 1, 0],
// 		[0, 1, 0],
// 		[1, 1, 0]
// 	]
// ];
//Create arrays within arrays for the L shape and every possible rotation (must be 3x3)
// const L = [
// 	[
// 		[0, 0, 1],
// 		[1, 1, 1],
// 		[0, 0, 0]
// 	],
// 	[
// 		[0, 1, 0],
// 		[0, 1, 0],
// 		[0, 1, 1]
// 	],
// 	[
// 		[0, 0, 0],
// 		[1, 1, 1],
// 		[1, 0, 0]
// 	],
// 	[
// 		[1, 1, 0],
// 		[0, 1, 0],
// 		[0, 1, 0]
// 	]
// ];
//Create an array for the O/box shape (must be 4x4)
// const O = [
// 	[
// 		[0, 0, 0, 0],
// 		[0, 1, 1, 0],
// 		[0, 1, 1, 0],
// 		[0, 0, 0, 0],
// 	]
// ];
//Create arrays within arrays for the S shape and every possible rotation (must be 3x3)
// const S = [
// 	[
// 		[0, 1, 1],
// 		[1, 1, 0],
// 		[0, 0, 0]
// 	],
// 	[
// 		[0, 1, 0],
// 		[0, 1, 1],
// 		[0, 0, 1]
// 	],
// 	[
// 		[0, 0, 0],
// 		[0, 1, 1],
// 		[1, 1, 0]
// 	],
// 	[
// 		[1, 0, 0],
// 		[1, 1, 0],
// 		[0, 1, 0]
// 	]
// ];
//Create arrays within arrays for the T shape and every possible rotation (must be 3x3)
// const T = [
// 	[
// 		[0, 1, 0],
// 		[1, 1, 1],
// 		[0, 0, 0]
// 	],
// 	[
// 		[0, 1, 0],
// 		[0, 1, 1],
// 		[0, 1, 0]
// 	],
// 	[
// 		[0, 0, 0],
// 		[1, 1, 1],
// 		[0, 1, 0]
// 	],
// 	[
// 		[0, 1, 0],
// 		[1, 1, 0],
// 		[0, 1, 0]
// 	]
// ];
//Create arrays within arrays for the Z shape and every possible rotation (must be 3x3)
// const Z = [
// 	[
// 		[1, 1, 0],
// 		[0, 1, 1],
// 		[0, 0, 0]
// 	],
// 	[
// 		[0, 0, 1],
// 		[0, 1, 1],
// 		[0, 1, 0]
// 	],
// 	[
// 		[0, 0, 0],
// 		[1, 1, 0],
// 		[0, 1, 1]
// 	],
// 	[
// 		[0, 1, 0],
// 		[1, 1, 0],
// 		[1, 0, 0]
// 	]
// ];

//get the canvas from html
const cvs = document.getElementById("tetris")
//context of the canvas
const ctx = cvs.getContext("2d")

//create a variable for the row and collum 
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
    for(c = 0; c < COL; C++){
      drawSquare(c,r,board[r][c]);
    }
  }
}

drawBoard();
//get the context of canvas to get methods and properties and allow use in JS

//Create arrays to make the variable positions for each shape (might want to do this in another JS file)


//since each square on each shape is 20 px as well as the grid we can set a var/const for sqaures instead of counting 20px

//the game board is 10x20 squares

//create the board using an array and loops to make each row and collum

//if a square is in the top left it will be at board[0][0] bottom right will be [19][9] this method should be fastest

//to control the shapes and rotations you should create 3x3 squares using arrays and set the ones not being used to empty while the squares with actual squares in it should be set to 1, the rotation axis should obviously be in the center

//like dario sudgested make an array inside an array for every shape 




















































































