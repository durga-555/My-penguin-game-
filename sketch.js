var PLAY = 1;
var END = 0;
var gameState = 1;

var penguin,penguinImg,penguinGroup;
var cloud,cloudImg,cloudsGroup;
var coin1,coin1Img,coin1Group;
var coin2,coin2Img,coin2Group;
var ap,apImg,apGroup;
var arrow,arrowImg,arrowGroup;

var go,goImg;

var score=0;

function preload(){
  penguinImg=loadImage("pengunene.png");
  cloudImg=loadImage("cloud.png");
  coin1Img=loadImage("rupee.png");
  coin2Img=loadImage("rupees.png");
  apImg=loadImage("AP.png");
  arrowImg=loadImage("arrow.png");
  goImg=loadImage("gameover.jpg");
  }


function setup() {
  createCanvas(350, 400);
  
  penguin=createSprite(200,300,50,50);
  penguin.addImage(penguinImg);
  penguin.scale=0.15
  
  go=createSprite(175,200);
  go.addImage(goImg);
  go.scale=1.3

  
  coin1Group= new Group();
  coin2Group= new Group();
  apGroup= new Group(); 
  arrowGroup= new Group();
  cloudsGroup= new Group();
  
  score = 0;
}

function draw() {
  background(220);
  background("LIGHTBLUE");
  stroke("white");
  fill("white")
  textSize(20)
  text("Score: "+ score, 250,50);
  
  if (gameState === PLAY) {
  
    
    
    penguin.x=World.mouseX
  
  touchingthecoins();
  spawnCoin1();
  spawnCoin2()
  spawnClouds();
  spawnobstacles();
  spawnarrows(); 
    
     go.visible=false
    
    if(apGroup.isTouching(penguin) || arrowGroup.isTouching(penguin)){
     gameState=END
  }
  }
  else if(gameState === END){
    go.visible=true
    
    background("black");
    
    stroke("white");
  fill("white")
  textSize(20)
  text("Score: "+ score, 250,50);
    
    coin1Group.destroyEach();
    coin2Group.destroyEach();
    cloudsGroup.destroyEach();
    apGroup.destroyEach();
    arrowGroup.destroyEach();
    penguin.destroy();
  }
  
  drawSprites();
  
  penguin.setCollider("circle", 0, 20, 40);
   debug=true
}
function spawnClouds() {
  
  if (frameCount % 120 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.x = Math.round(random(50,350));
    cloud.addImage(cloudImg);
    cloud.scale = 0.5;
    cloud.velocityY = 3;
    
     
    cloud.lifetime = 200;
    
    cloud.depth = penguin.depth;
    penguin.depth = penguin.depth + 1;
    cloudsGroup.add(cloud);
  }
}
function spawnCoin1(){
  if(frameCount % 180 === 0){
 var coin1 = createSprite(random(50,350),75,10,10);
   coin1.addImage(coin1Img);
    coin1.scale=0.2
  coin1.velocityY=2
  
    coin1.lifetime=200;
    coin1Group.add(coin1);
  }
}
function spawnCoin2(){
  if(frameCount % 280 === 0){
    var coin2 = createSprite(random(50,350),75,10,10);
   coin2.addImage(coin2Img);
    coin2.scale=0.25
  coin2.velocityY=2
  
    coin2.lifetime=200;
  coin2Group.add(coin2);
  }
}
function spawnobstacles(){
  if(frameCount % 295 === 0){
    var ap= createSprite(10,100,10,10);
   ap.addImage(apImg);
    ap.scale=0.25
    ap.velocityX=2
    ap.velocityY=2
  
   ap.lifetime=200;
  apGroup.add(ap)
  }
}
function spawnarrows(){
  if(frameCount % 195 === 0){
    var arrow= createSprite(random(50,350),75,10,10);
   arrow.addImage(arrowImg);
    arrow.scale=0.08
    arrow.velocityY=3
  
   arrow.lifetime=200;
  arrowGroup.add(arrow);
  }
}
function touchingthecoins(){
  if(coin1Group.isTouching(penguin)) {
    score=score+1    
    coin1Group.destroyEach();
    
  }
  if(coin2Group.isTouching(penguin)){
    score=score+1
    coin2Group.destroyEach();
  }
  
}

  
  


