function setup() {
  createCanvas(800,400);
  movingRect= createSprite(300, 200, 80, 30);
  fixedRect= createSprite(400, 200, 50, 50);
}

function draw() {
  background("pink");  
movingRect.x=World.mouseX;
movingRect.y=World.mouseY;


if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
  fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
  fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2 &&
  movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";


  } 
  else{
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }
  drawSprites();
}