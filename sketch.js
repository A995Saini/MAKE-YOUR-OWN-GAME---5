const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
const Body=Matter.Body;

var backgroundImage;
var ballImage;
var ringImage;
var engine,world;
var ring; 
var ball;
var ground;
var slingshot;
var box;
var box2;
var ballsprite;
var scoresprite;
var score=0;



function preload(){
  backgroundImage=loadImage("BACKGROUND.jpg");
  ballImage=loadImage("BLUEBALL2.png");
  ringImage=loadImage("RING2.png");
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  engine=Engine.create();
  world=engine.world;
  
  ring=createSprite(width-300,height/2);
  ring.addImage(ringImage);
  ring.scale=0.3;
  ring.velocityY=8

  ballsprite=createSprite(100,100,20,20)
  ballsprite.visible=false;

  scoresprite=createSprite(width-300,height/2,100,20);
  scoresprite.visible=false;

  ball=new Ball(100,100,50);

  ground=new Ground();

  slingshot=new SlingShot(ball.body,{x:100,y:height-200});

  box=new Box(width-500,height/2,45,45);

  box2=new Box(width-100,height/2,50,50);

  
}

function draw() {
  background(backgroundImage);  
  Engine.update(engine);
  textSize(20);
  fill("blue");
  text("Score "+score,60,60)

  if (ring.y>height/2+185){
    ring.velocityY=-12.5
  }

  if(ring.y<height/2-185){
    ring.velocityY=+12.5
  }

  if(ballsprite.isTouching(scoresprite)){
    score=score+2
  }

  ballsprite.x=ball.body.position.x
  ballsprite.y=ball.body.position.y

  scoresprite.x=ring.x
  scoresprite.y=ring.y


  Matter.Body.setPosition(box.body,{x:ring.x-100,y:ring.y})
  Matter.Body.setPosition(box2.body,{x:ring.x+100,y:ring.y})
  
  
   
  
  ball.display();
  slingshot.display();
  //box.display();
  //box2.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY}); 
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(ball.body,{x:100,y:100})
    slingshot.attach(ball.body);

  }
}
