var garden,rabbit;
var gardenImg,rabbitImg,apple,appleImg,leaf,leafImg,OrLeaf,OrLeafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
  leafImg=loadImage("leaf.png");
  OrLeafImg=loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  

garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit=createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

Apple=createSprite(60,38,30,30);
Apple.addImage("boy",appleImg);
Apple.scale=0.09;
Apple.velocityY=2;
Apple.lifetime=340;7

leaf=createSprite(78,65,30,30);
leaf.addImage("op",leafImg);
leaf.scale=0.09;
leaf.velocityY=2;
}





function draw() {
  background(0);
  rabbit.x=mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}