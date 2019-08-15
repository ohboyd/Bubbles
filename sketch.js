function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  let randomNumber = random(1, 50);
  ball1 = new Bounce(randomNumber, 10);
  ball2 = new Bounce(5, randomNumber);
  ball3 = new Bounce(30, 4);
}

function draw() {
  background(0);
  ball1.paint();
  ball1.move();
  ball1.redirect();
  ball2.paint();
  ball2.move();
  ball2.redirect();
  ball3.paint();
  ball3.move();
  ball3.redirect();
}
