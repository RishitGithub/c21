var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,800);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 600, 60, height/2);
  wall.shapeColor = white;
}

function draw() {
  background("black");  
  drawSprites();
}