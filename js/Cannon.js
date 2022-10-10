class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    
  }

  display()
  {
    push();
    imageMode(CENTER);
    image(cannonImg, 0, 0, this.width, this.height);
    pop();
    image(cannonBaseImg, 70, 20, 200, 200);
    noFill();
  }
  
}
