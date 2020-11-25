var movingrect,fixedrect,wall
var rect1,rect2

function setup() {
  createCanvas(800,400);
  movingrect=createSprite(400, 200, 50, 20);
  fixedrect=createSprite(500, 200, 60, 50);
  wall=createSprite(200,200,40,15);
  rect1=createSprite(500,400,40,40);
rect1.shapeColor="red";
rect1.velocityX=2;

  rect2=createSprite(700,400,40,45);
  rect2.shapeColor="orange";
}

function draw() {
  background("black");  
  movingrect.x=mouseX;
  movingrect.y=mouseY;



if(isTouching(  movingrect,wall       )){
  movingrect.shapeColor="blue";
  wall.shapeColor="yellow";

}else{
  movingrect.shapeColor="green";
  wall.shapeColor="green";
}
 bounceoff(rect1,rect2)

  

  drawSprites();
}