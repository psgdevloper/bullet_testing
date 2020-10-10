var wall,gun1 ;
var thickness, bullet;
var speed, weight; 
var bullet1,bullet2;
 status ="ready";

function setup() {
  createCanvas(1350, 400);
    
    thickness = random (60,90);
   	wall=createSprite(1250,200, thickness, height/2)
    wall.shapeColor=(80,80,80);
    
    bullet=createSprite(100, 200, 50,10); 
    bullet.shapeColor="white";
}

function draw() {
  background("black");
  textSize(24)
  text("Press Right Arrow to fire",200,50)
   

    gun1 = createSprite(50,300,100,200)
    gun1.shapeColor=(255,21,230);	
    gun2 = createSprite(50,200,100,10)
    gun2.shapeColor="yellow";
    createSprite(100,200,20,20)


    if(keyIsDown(RIGHT_ARROW) && status == "ready" ){
        speed=random(223,500);
        
        bullet=createSprite(100, 200, 50,10); 
        bullet.shapeColor="white";
        bullet.velocityX = speed;
        status ="fire"
        weight=random(30,50);
      }
if(status=="fire"){

  if (hasCollided(bullet,wall)){

        var damage = 0.7*weight*speed*speed/(thickness*thickness*thickness)
        console.log(damage)
    if(damage<10){
        wall.shapeColor="green";
  
      }
    if(damage>10){
        wall.shapeColor="red"
  
      }
    }
  }

 
  drawSprites();
 
}
  



function hasCollided(bullet1,bullet2){

  bulletRightEdge= bullet1.x+bullet1.width;
   wallLeftEdge = bullet2.x;
   console.log(bulletRightEdge)
   console.log(wallLeftEdge)
  if(bulletRightEdge>=wallLeftEdge){
    status ="ready"
   return true;
  }
  
  return false;
 }
