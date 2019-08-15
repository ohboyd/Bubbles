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
  paint();
  move();
  redirect();
}

function paint() {
  fill(0);
  stroke(255);
  ellipse(x, y, 100, 100);
};

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
