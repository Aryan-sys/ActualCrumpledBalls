var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,trash,trash2,trash3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	packageBody = new paper;
	trash = new trashcan(680,610,70,70);
	


	ground = new Ground;
	

	Engine.run(engine);
	console.log("ih");
    keyPressed();
}

function draw() {
	
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageBody.display();
  trash.display();
 
  ground.display();


  drawSprites();
 
}
function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(packageBody.body,packageBody.position, {x: 70, y: -70});
		console.log("10");
	}
}


