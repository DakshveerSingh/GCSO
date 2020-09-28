var car,wall;
var speed,weight;
var deformation = (0.5*weight*speed*speed)/22500;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = "black";
}

function draw() {
  background(255,255,255);  

  if(car.x + wall.x === (car.width + wall.width)/2){
    car.velocityX = 0;

    if(deformation < 100){
      car.shapeColor = rgb(0,255,0);
    }

    if(deformation > 100 && deformation < 180){
      car.shapeColor = rgb(230,230,0);
    }

    if(deformation > 180){
      car.shapeColor = rgb(255,0,0);
    }
  }
  drawSprites();
}