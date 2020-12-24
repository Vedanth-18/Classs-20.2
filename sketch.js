var rect1, rec2;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(100, 200, 50, 50);
  rect2 = createSprite(600, 200, 100, 20);
  rect1.velocityX=2;
  rect2.velocityX=-2;
  rect1.shapeColor="Black";
  rect2.shapeColor="red";
}

function draw() {
  background(255,255,255);  

  if(rect1.x-rect2.x<rect1.width/2+rect2.width/2 && rect2.x-rect1.x<rect1.width/2+rect2.width/2) {
     rect1.velocityX=rect1.velocityX*(-1);
     rect2.velocityX=rect2.velocityX*(-1);
  }
  drawSprites();

}