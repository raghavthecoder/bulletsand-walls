var wall,thickness;
var bullet
var speed;
var weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  
  bullet=createSprite(50,200,50,50);
  //wall.shapeColor=color(247,247,247);
  wall=createSprite(1200,200,thickness,height/2);
  //wall.shapeColor=color(80,80,80);

  speed=random(223,321);
  weight=random(30,52);  
  thickness=random(90,110);
  wall=random(22,83);

  bullet.velocityX=speed
}

function draw() {
  background(255,255,255);  
  /*
  if(wall.x-car.x<(car1.width+wall.width)/2){
    car1.velocityX=0;
    deformation=0.5*weight*speed*speed/22509;
    
    if(deformation>180){
      car1.shapeColor=color(255,0,0);
    }

    if(deformation>180){
      car1.shapeColor=color(230,230,0);
     }

     if(deformation<100){
      car1.shapeColor=color(0,255,0)
     }

  }
*/

  drawSprites();
}

function hasCollided(Lbullet,Lwall){
  bulletRightEdge=Lbullet.x+Lbullet.width
  wallLeftEdge=lwall.x
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false
}

if(hasCollided(bullet,wall)){

  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }

  if(damage<10) {
     wall.shapeColor=color(0,255,0);
  }

}
  