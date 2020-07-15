var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,trash,slingshot;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	packageBody = new paper;
	trash = new trashcan(710,580,140,140);

	slingshot = new SlingShot(packageBody.body,{x: 200,y: 100});

	

	ground = new Ground;
	

	Engine.run(engine);
	console.log("ih");
    keyPressed();
}
mouseDragged();
mouseReleased();
function draw() {
	rectMode(CENTER);
	background(255,0,0);

 
  Engine.update(engine);
  
  trash.display();
  
 
  packageBody.display();
  ground.display();
 slingshot.display();

  drawSprites();
 
}
function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(packageBody.body,packageBody.position, {x: 480, y: -710});
		console.log("10");
	}
}
function mouseDragged(){
	Matter.Body.setPosition(bird.body,{x:mouseX , y : mouseY})
}
function mouseReleased(){
	slingshot.fly();
}

