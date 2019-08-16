let balls = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function mouseDragged() {
  let b = new Bounce(mouseX, mouseY)
  balls.push(b);
}

function draw() {
  background(0);
  for (var i = 0; i < balls.length; i++) {
    balls[i].paint();
    balls[i].move();
    balls[i].redirect();
  }
}
