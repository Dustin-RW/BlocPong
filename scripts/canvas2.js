var gameBoard = { x: 0, y: 0, width: 800, height: 500 };

var player = { x: 10, y: 215, width: 10, height: 80 };

var computer = { x: 700, y: 215, width: 10, height: 80 };

var ball = { x: 400, y: 250, radius: 5, startAngle: (0 * Math.PI), endAngle: (2 * Math.PI) };

var canvas = document.getElementById('pongCanvas');
var context = canvas.getContext('2d');

var renderToCanvas = function(context, renderable, color, callback) {
  context.fillStyle = color;
  callback(context, renderable);
};

var renderRectangle = function(context, rectangleable) {
    context.beginPath();
    context.fillRect(rectangleable.x, rectangleable.y, rectangleable.width, rectangleable.height);
};

var renderCircle = function(context, circleleable) {
  context.beginPath();
  context.arc(circleleable.x, circleleable.y, circleleable.radius, circleleable.startAngle, circleleable.endAngle);
  context.fill();
};

var render = function() {
  renderToCanvas(context, gameBoard, 'black', renderRectangle);

  renderToCanvas(context, player, 'red', renderRectangle);

  renderToCanvas(context, computer, 'red', renderRectangle);

  renderToCanvas(context, ball, 'white', renderCircle);
};

window.onload = function() {
  render();
};
