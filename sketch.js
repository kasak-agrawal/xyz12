const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground1, ball, wall1, wall2;

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	//creating the bodies here 
	ground1 = new Ground(width/2,695, width, 20);
	wall1 = new Wall(1100, 620, 12, 140 );
	wall2 = new Wall(1300, 620, 12, 140);
	ball1 = new Ball1(400, 500, 20);

	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	background(201, 10, 10);
	
	Engine.update(engine);
	//displaying all the bodies
	ground1.display();
	wall1.display();
	wall2.display();
	ball1.display();
    
	drawSprites();
}

//making the function for apply force 
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball1,ball1.position,{x:85,y:-85});
  
	}
}