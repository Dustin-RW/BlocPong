var canvas = document.getElementById('pongCanvas');
var context = canvas.getContext('2d');


function GameBoard(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

function Paddle(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

function Ball(x, y, radius, startAngle, endAngle) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.startAngle = startAngle * Math.PI;
  this.endAngle = endAngle * Math.PI;
}

GameBoard.prototype.render = function() {
  context.beginPath();
  context.fillStyle = "black";
  context.fillRect(this.x, this.y, this.width, this.height);
}

Paddle.prototype.render = function() {
  context.beginPath();
  context.fillStyle = "red";
  context.fillRect(this.x, this.y, this.width, this.height);
}

Ball.prototype.render = function() {
  context.beginPath();
  context.fillStyle="white";
  context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
  context.fill();
}

var gameBoard = new GameBoard(0, 0, 800, 500);
var player = new Paddle(10, 215, 10, 80);
var computer = new Paddle(780, 215, 10, 80);
var ball = new Ball(400, 250, 5, 0, 2);

var render = function() {
  gameBoard.render();
  player.render();
  computer.render();
  ball.render();
};

window.onload = function() {
  render();
}
