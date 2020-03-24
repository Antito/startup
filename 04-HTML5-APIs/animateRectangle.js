let canvas = document.getElementById("moving-rectangle"),
context = canvas.getContext("2d"),
  x = 5,
  y = 5,
  velocity = 10;

drawRectangle = () => {
  context.fillStyle = "blue";
  context.strokeStyle = "black";
  context.lineWidth = "2";
  context.fillRect(x, y, 100, 200);
  context.strokeRect(x, y, 100, 200);
}

moveRectangle = () => {
  canvas.width = 500;
  canvas.height = 200;
  x = x + velocity;
  if (x + 100 > canvas.width || x < 0) {
    velocity *= -1;
  }
  drawRectangle();
}

setInterval(moveRectangle, 100); 