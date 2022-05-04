var x;

function setup() {
  createCanvas(400, 400);
  x = 20;
}

function draw() {
  background(220);
  circle(x,200,25);
  x+=2;
}