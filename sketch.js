var fixedRect,movingRect;

var car, truck, bus, school;

function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  car = createSprite(250,100,50,20);
  truck = createSprite(300,300,40,60);
  bus = createSprite(100,100,20,50);
  school = createSprite(700,100,20,30);

  bus.velocityX = 5;
  school.velocityX = -2;
  // 65 -- 50,80----25 + 40 = 65
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;



  console.log(movingRect.x-fixedRect.x);

  if(isTouching(movingRect,car)){
    movingRect.shapeColor="red";
  }
    
  else {
    movingRect.shapeColor="green";
    
  }
 
  bounceOff(bus,school);
  drawSprites();
}

// Function with arguments

