const {
  Engine,
  World,
  Bodies,
  Body,
  Mouse,
  MouseConstraint,
  Constraint,
  Composite,
  Detector,
} = Matter;
var ground;
var launchX, launchY;
var launcherX, launcherY;
var gamestate = "start";

function setup() {
  createCanvas(800, 500);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200, 490, 1200, 20);
  tanker = new Tanker(50, 400, 100, 100);
  tankerhead = new TankerHead(100, 460, 100, 100);
  ball1 = new Ball(300, 100, 25);
  ball2 = new Ball(400, 200, 25);
  ball3 = new Ball(500, 150, 25);
  ball4 = new Ball(600, 100, 25);

  canonball = new CanonBall(20, 20);
  shot = new ShootBall(canonball.body, { x: 70, y: height - 220 });
}

function draw() {
  background("lightblue");
  Engine.update(engine);

  ground.display();
  tankerhead.display();
  tanker.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();

  canonball.display();
  shot.display();
}
