var bananaImage, obstacleImage, obstacleGroup, back
var score = 0;
var PLAY = 1, END = 0;
var gameState = 1;
function preload() {
  backImage = loadImage("jungle.png");
  player_running=loadAnimation                         ("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage=loadImage("banana.png");
  obstacleImage=loadImage("stone.png");
  
}

function setup() {
  createCanvas(400, 400);
  back = createSprite(200,200);
  back.addImage(backImage);
  back.scale=2.0
  back.x=back.width/2;
  back.velocityX=-4
  player = createSprite(100,300);
  player.addAnimation("run",player_running);
  player.scale=0.17
  ground = createSprite(100,360,600,5);
  ground.visible=false;
  foodGroup = new Group()
  obstacleGroup= new Group();
  score = 0
  
}

function draw() {
  background(220);
 
  if (foodGroup.isTouching(player)){
    foodGroup.destroyEach()
      score=score+2
  }
  
  
  switch(score){
    case 10: player.scale=0.12;
      break;
    case 20: player.scale=0.14
      break;
    case 30: player.scale=0.16
      break;
    case 40: player.scale=0.18
      break;
      default: break;
  }
  
  if(obstacleGroup.isTouching(player)){
     player.scale=0.2;
    }
  
  player.collide(ground);
  player.velocityY = player.velocityY + 0.8

  if(back.x < 0){
  back.x=back.width/2;
   }
  
  if(keyDown("space")) {
    player.velocityY = -12;
  }
  
  spawnFoods();
  spawnStone();
  drawSprites(); 
  
  
  
  stroke("white")
  textSize(20)
  fill("white")
  text("score :"+score,300,100)
}
function spawnFoods(){
if(frameCount % 80 === 0){
banana =createSprite(400,150)
banana.addImage(bananaImage);
banana.scale=0.08
banana.velocityX=-7
foodGroup.add(banana);
}
}
function spawnStone(){
if(frameCount % 120 === 0){
stone =createSprite(400,350)
stone.scale=0.2
stone.velocityX=-5
stone.addImage(obstacleImage);
obstacleGroup.add(stone)
}
}
