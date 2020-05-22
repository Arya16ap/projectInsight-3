var girl,girlImage;
var mythEaterImage,mythEater;
var background1Image,background1;
var background2Image,background2;
var play,store;
var gameState = "level1";
var expell = 0,incarsious = 1;killer = 2,protego = 3;
var charms1,charms2,charms3,charms4;
function preload() {
  girlImage = loadImage("character2.png");
  background1Image = loadImage("dungon.jpg");
  background2Image = loadImage("bg.png");
  mythEaterImage = loadImage("enemy.png");
}
function setup() {
  createCanvas(1600,1200);
  background1 = createSprite(600,400,1600,1200);
  background1.addImage("background1",background1Image);
  background1.scale = 5.5;
  background2 = createSprite(700,300,1600,1200);
  background2.addImage("background2",background2Image);
  background2.visible = false;
 mythEater = createSprite(1200,300,50,50);
  mythEater.addImage(mythEaterImage);
  mythEater.visible = false;
  
  girl = createSprite(400, 200, 50, 50);
  girl.addImage(girlImage);
  girl.scale = 0.5;

  play = createSprite(1100,300,100,50);
  store = createSprite(1100,400,100,50)

  
}

function draw() {
  background("black"); 
  if(gameState === "level1"){
    
  }
 

  if(mousePressedOver(play)){
    gameState = "level2" ;
    background2.visible = true;
    play.visible = false;
    store.visible= false;
    girl.y = 300;
    background1.visible = false;
    mythEater.visible = true;

  }
  
  if(gameState === "level2") {
    expell = createButton('expell');
    expell.position(400,400);
    kill = createButton('kill');
    kill.position(350,400);
    incarsious = createButton('incarsious');
    incarsious.position(400,450);
    protego = createButton('protego');
    protego.position(330,450);
    expell.mousePressed(function(){
      charms1 = createSprite(425,290,15,15);
      charms1.shapeColor = "red";
      charms1.velocityX = 7;
      

    })
    kill.mousePressed(function(){
      charms2 = createSprite(425,290,15,15);
      charms2.shapeColor = "green";
      charms2.velocityX = 7;
      

    })
    incarsious.mousePressed(function(){
      charms3 = createSprite(425,290,15,15);
      charms3.shapeColor = "brown";
      charms3.velocityX = 7;
      

    })
    protego.mousePressed(function(){
      charms4 = createSprite(450,290,30,30);
      charms4.shapeColor = "blue";
      
      

    })
  }



  
  drawSprites();
}