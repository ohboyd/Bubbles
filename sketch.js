function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  ball = new Bounce();
}

function draw() {
  background(0);
  ball.paint();
  ball.move();
  ball.redirect();
}

class Bounce {
  constructor(){
    this.x = 100;
    this.y = 100;
    this.speed = {
      x: 50,
      y: 10
    };
  }

  paint() {
    fill(0);
    stroke(255);
    ellipse(this.x, this.y, 100, 100);
  };

  move() {
    if(this.x >= width || this.x < 0) {
      this.speed.x = (-this.speed.x);
    }
    if(this.y >= height || this.y < 0) {
      this.speed.y = (-this.speed.y);
    }
  };

  redirect() {
    this.x = this.x + this.speed.x;
    this.y = this.y + this.speed.y;
  };
}
