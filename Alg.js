function isTouching(rectA,rectB){
  
    if(rectA.x-rectB.x<=rectB.width/2+rectA.width/2 &&
      rectB.x - rectA.x <= rectB.width/2+rectA.width/2 &&
      rectA.y - rectB.y <= rectB.height / 2 + rectA.height / 2 &&
      rectB.y-rectA.y<=rectB.height / 2 + rectA.height/ 2 ) {
  
        rectB.shapeColor="red";
    
        return true;
  
    }
    else{
      rectB.shapeColor="green";
        return false;
    } 
  } 
  
  function bounceOff(rectA,rectB){
      if(rectA.x-rectB.x<=rectB.width/2+rectA.width/2 &&
        rectB.x - rectA.x <= rectB.width/2+rectA.width/2) {
            rectA.velocityX = rectA.velocityX * -1;
            rectB.velocityX = rectB.velocityX * -1;

            return true;
        }
    else {
        return false;
    }
  }