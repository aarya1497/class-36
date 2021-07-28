var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car1,car2,cars;
var c1img, c4img, track;

function preload(){
 c1img = loadImage("car1.png");
 c4img = loadImage("car4.png");
 track = loadImage("track.jpg");
 

}

function setup(){
  canvas = createCanvas(displayWidth+500,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
