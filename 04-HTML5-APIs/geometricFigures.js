const drawLine = (ctx) => {
  ctx.beginPath();
  ctx.moveTo(200, 0);
  ctx.strokeStyle = "red";
  ctx.lineTo(200, 200);
  ctx.stroke();
}

const drawSquare= (ctx) => {
  ctx.beginPath();
  ctx.strokeStyle = "green";
  ctx.rect(50, 35, 80, 70);;
  ctx.stroke();
}

const drawCircle = (ctx) => {
  ctx.beginPath();
  ctx.strokeStyle = "yellow";
  ctx.arc(300, 100, 40, 0, 2 * Math.PI);
  ctx.stroke();
}

const drawObjects = () => {
  let draw = document.getElementById("geometric-figures");

  let ctx = draw.getContext("2d");
  drawCircle(ctx);
  drawSquare(ctx);
  drawLine(ctx);
}

window.addEventListener("load", drawObjects); 