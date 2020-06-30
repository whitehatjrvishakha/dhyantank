class Ball {
  constructor(x, y, width, height) {
    var options = {
      frictionAir: 0,
      friction: 0,
      frictionStatic: 1,
      inertia: Infinity,
      restitution: 1.0,
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    fill("lightpink");
    circle(pos.x, pos.y, this.width, this.height);
    pop();
  }
}
