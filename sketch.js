var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);


  // 65 -- 50,80----25 + 40 = 65
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  console.log(movingRect.x-fixedRect.x);

 if(movingRect.x-fixedRect.x<=fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x - movingRect.x <= fixedRect.width/2+movingRect.width/2 &&
    movingRect.y - fixedRect.y <= fixedRect.height / 2 + movingRect.height / 2 &&
    fixedRect.y-movingRect.y<=fixedRect.height / 2 + movingRect.height/ 2 )
  {movingRect.shapeColor="red";
  fixedRect.shapeColor="red";

}
else{movingRect.shapeColor="green";
  fixedRect.shapeColor="green";

} 
  drawSprites();
}