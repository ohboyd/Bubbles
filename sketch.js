let x = 100;
let y = 100;
let speed = {
  x: 50,
  y: 10
};

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(0);
  fill(0);
  stroke(255);
  ellipse(x, y, 100, 100);
  move();
  redirect();
}

function move() {
  if(x >= width || x < 0) {
    speed.x = (-speed.x);
  }
  if(y >= height || y < 0) {
    speed.y = (-speed.y);
  }
};

function redirect() {
  x = x + speed.x;
  y = y + speed.y;
};
