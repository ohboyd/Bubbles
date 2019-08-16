class Ballpit {
  constructor(xLocation, yLocation){
    this.x = xLocation;
    this.y = yLocation;
    this.speed = {
      x: random(-2, 2),
      y: random(-2, 2)
    };
  }

  paint() {
    fill(0, 150, 150);
    stroke(255);
    ellipse(this.x, this.y, 50);
  };

  move() {
    this.x = this.x + this.speed.x;
    this.y = this.y + this.speed.y;
  };

  redirect() {
    if(this.x >= width || this.x < 0) {
      this.speed.x = (-this.speed.x);
    }
    if(this.y >= height || this.y < 0) {
      this.speed.y = (-this.speed.y);
    }
  };
}
