class Bounce {
  constructor(xSpeed, ySpeed){
    this.x = 100;
    this.y = 100;
    this.speed = {
      x: xSpeed,
      y: ySpeed
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
