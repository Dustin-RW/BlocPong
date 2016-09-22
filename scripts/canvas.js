var canvas = document.getElementById('pongCanvas');
var context = canvas.getContext('2d');

// CONSTRUCTORS
function GameBoard(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
};

function Paddle(x, y, width, height, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
};

function Ball(x, y, radius, startAngle, endAngle) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.startAngle = startAngle * Math.PI;
    this.endAngle = endAngle * Math.PI;
};

// PROTOTYPES FOR CONSTRUCTORS
// generates GameBoard visual;
GameBoard.prototype.render = function() {
    context.beginPath();
    context.fillStyle = "black";
    context.fillRect(this.x, this.y, this.width, this.height);
};
// generates Paddle (Player and Computer) visual;
Paddle.prototype.render = function() {
    context.beginPath();
    context.fillStyle = "red";
    context.fillRect(this.x, this.y, this.width, this.height);
};
// processes Paddle movement up with Eventlistener
Paddle.prototype.moveUp = function() {
    if (this.y > 0) {
        this.y = this.y - this.speed;
    }
};
// processes Paddle movement down with Eventlistener
Paddle.prototype.moveDown = function() {
    if (this.y < 420) {
        this.y = this.y + this.speed;
    }
};
// generates Ball visual;
Ball.prototype.render = function() {
    context.beginPath();
    context.fillStyle = "white";
    context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
    context.fill();
};

// GLOBAL VARIABLES
// contructs pieces for Pong
var gameBoard = new GameBoard(0, 0, 800, 500);
var player = new Paddle(10, 200, 10, 80, 10);
var computer = new Paddle(780, 215, 10, 80);
var ball = new Ball(400, 250, 5, 0, 2);

// FUNCTIONS AND EVENTLISTENERS
// used in window to render board and board pieces during load
var render = function() {
    gameBoard.render();
    player.render();
    computer.render();
    ball.render();
};


// @params = takes a function for callback; Sets amount of times in window
var animate = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
        window.setTimeout(callback, 1000 / 60)
    };

// renders visual and animates continuious loop (see animate function)
var step = function() {
    render();
    animate(step);
}


var playerPaddleMove = function(e) {
    var keyCode = e.keyCode;
    if (keyCode === 38) {
        player.moveUp();
    } else if (keyCode === 40) {
        player.moveDown();
    }
}

// window.addEventListener("keydown", player.move)

window.onload = function() {
    step();
    window.addEventListener('keydown', playerPaddleMove);
}
