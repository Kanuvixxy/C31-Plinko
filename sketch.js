const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var plinkos = [], particles = [], divisions = [];
var divisionHeight = 300; 

var engine, world;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width / 2, height, width, 20);
}

function draw() {
  background(0);  

  Engine.update(engine);
  
  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k, height - divisionHeight / 2, 10, divisionHeight));
  }

  for(var j = 75; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75));
  }

  for(var h = 50; h <= width - 10; h = h + 50){
    plinkos.push(new Plinko(h, 175));
  }

  for(var h = 75; h <= width; h = h + 50){
    plinkos.push(new Plinko(h, 275));
  }

  for(var i = 50; i <= width - 10; i = i + 50){
    plinkos.push(new Plinko(i, 375));
  }

  for(var g = 0; g < plinkos.length; g++){
    plinkos[g].display();
  }

  for(var f = 0; f < divisions.length; f++){
    divisions[f].display();
  }

  if(frameCount % 60 == 0){
    particles.push(new Particle(random(width / 2 - 30), width / 2 + 30));
  }

  for(var e = 0; e < particles.length; e++){
    particles[e].display();
  }

  ground.display();

  drawSprites();
}