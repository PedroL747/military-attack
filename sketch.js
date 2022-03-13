const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var superxao,omi
var la,b
var engine, world;
var desfio = 0
function preload(){
  la=loadImage("ceu.jpg")
  b=loadImage("b.png")
  
}
function setup() {
  createCanvas(1365,615);
  engine = Engine.create();
  world = engine.world;

 superxao = new Xao(00,820,4000,400)
  omi = new Cara(100,390)
  naoomi = new Caça(1200,200)
}

function draw() {
  background(la); 
   Engine.update(engine); 
  drawSprites();

  if(keyDown(RIGHT_ARROW)){
    omi.body.velocityX=3
  }
  if(keyDown(LEFT_ARROW)){
    omi.body.velocityX=-3
  }
  if(keyDown(UP_ARROW)){
    omi.body.velocityY=-3
  }
  if(keyDown(DOWN_ARROW)){
    omi.body.velocityY=3
  }
  superxao.display()
  omi.display()
  naoomi.display()

  if (frameCount % 50 == 0) {
 balaoVermelho()
}
if(frameCount % 30 == 0){
  desfio=desfio+1
}
textSize(20)
text(desfio,1000,200)

}
function balaoVermelho() {
  var vermelho = createSprite(1100,Math.round(random(20, 615)), 50, 50);
  vermelho.addImage(b)
  vermelho.velocityX = -6;
  vermelho.lifetime = 200;
  vermelho.velocityX = -(6 + desfio /10 );
 
}

