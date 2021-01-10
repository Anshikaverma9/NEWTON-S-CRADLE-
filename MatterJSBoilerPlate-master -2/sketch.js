
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var block1;
var bob1,bob2,bob3,bob4,bob5;
var chain1;
var bobes = [bob1,bob2,bob3,bob4,bob5];

function preload()
{
	
}

function setup() {
	createCanvas(900, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    block1 = new Roof(400,50,650,20);
    bob1 = new Bob(200,300);
    bob2 = new Bob(300,300);
    bob3 = new Bob(400,300);
    bob4 = new Bob(500,300);
    bob5 = new Bob(600,300);
    chain1= new Chain(bob1.body,{x:200, y:50});
    chain2= new Chain(bob2.body,{x:300, y:50});
    chain3= new Chain(bob3.body,{x:400, y:50});
    chain4= new Chain(bob4.body,{x:500, y:50});
    chain5= new Chain(bob5.body,{x:600, y:50});


}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  
  block1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 chain1.display();
 chain2.display();
 chain3.display();
 chain4.display();
 chain5.display();
}

function mouseDragged(){
  Matter.Body.setPosition(bobes.body,{ x: mouseX, y : mouseY})
}
