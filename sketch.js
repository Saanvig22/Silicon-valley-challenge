var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var handImage1,handImage2;  
var p1,p2; 
var redhandimg1,redhandimg2; 
var gameState = 0; 
var playerN = [];
var allPlayers; 


function preload(){
backgroundImage = loadImage("background.png"); 
handImage1 = loadImage("hand.png"); 
handImage2 = loadImage("hand2.png"); 
redhandimg1 = loadImage("redhand1.png"); 
redhandimg2 = loadImage("redhand2.png"); 
}

function setup() {
  createCanvas(windowWidth,windowHeight); 
  database = firebase.database(); 
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(backgroundImage);  
  //checking if the player count is 2 or not 
  if (playerCount == 2) {
    game.update(1);
  }

if (gameState === 1) {
  game.play();
}
  
} 

//saistasekh@gmail.com