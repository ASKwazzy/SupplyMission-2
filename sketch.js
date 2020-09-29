var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var boxP1, boxP2, boxP3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(400, 350);
	rectMode(CENTER);
	

	packageSprite=createSprite(200, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.11;

	helicopterSprite=createSprite(200, 75, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.35;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	var package_options= {
		restitution:0,
		isStatic:true,
	}

	packageBody = Bodies.circle(200 , 75 , 5 , package_options);
	packageBody.velocityX = 5;
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, height-40, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	boxP1 = new Log(200,305, 100,10);

	boxP2 = new Log(150,280,10,50);

	boxP3 = new Log(250,280,10,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);

  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  
  boxP1.display();
  boxP2.display();
  boxP3.display();

  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
 }
	if(keyCode === LEFT_ARROW){
		helicopterSprite.x = helicopterSprite.x-10;
		translation = {
			x:-10,
			y:0,
		}

		Matter.Body.translate(packageBody, translation);
	}

	if(keyCode === RIGHT_ARROW){
		helicopterSprite.x = helicopterSprite.x+10;
		translation = {
			x:+10,
			y:0,
		}

		Matter.Body.translate(packageBody, translation);
	}
}




