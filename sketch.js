
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbindown,dustbinleft,dustbinright;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,650,1200,10);
  dustbindown = new Dustbin(600,640,100,10)
	dustbinleft = new Dustbin(550,600,10,100)
	dustbinright = new Dustbin(650,600,10,100)
	paper = new Paper(100,640,30)

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
   ground.display();
  dustbindown.display();
  dustbinleft.display();
  dustbinright.display();
  paper.display();

drawSprites();

}
function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-25});
  
  }
}
 