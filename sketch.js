
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstaclesGroup
var invisibleGround; 
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  
}



function setup() {
  createCanvas( 400, 400);
  
monkey = createSprite(50, 350, 50, 50)
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;

  
  invisibleGround = createSprite (50,390,700,2);
  invisibleGround.visible = false;
  
  obstaclesGroup = new Group ();
  foodGroup = new Group ();
  
}


function draw() {
background("white");
  
  text("Score: "+ score, 300,50);
  
 
  
 monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(invisibleGround);
 
  
   if(keyDown("space")&& monkey.y >= 350) {
        monkey.velocityY = -14;
   }
  
 if (foodGroup.isTouching(monkey)){
    foodGroup.destroyEach();
    score = score + 2;
  }
  
  if (obstaclesGroup.isTouching(monkey)){
    reset();
  }
  
  spawnBananas();
  spawnObstacles();
  drawSprites();
  
}

function spawnObstacles() {
  
  if (frameCount % 100 === 0){
   var obstacle = createSprite(300,380,10,40);
    obstacle.addImage ("Obstacle", obstacleImage);
   obstacle.velocityX = -5;
            
    obstacle.lifetime = 300;
    obstacle.scale = 0.1;
   
    obstaclesGroup.add(obstacle);
 }
}

function spawnBananas() {
  
  if (frameCount % 150 === 0){
   var banana = createSprite(300,330,10,40);
    banana.addImage ("Banana", bananaImage);
   banana.velocityX = -4;
            
    banana.lifetime = 600;
    banana.scale = 0.1;
   
    foodGroup.add(banana);
 }
}

function reset(){

  obstaclesGroup.destroyEach();
  foodGroup.destroyEach();
  
  score = 0;

}