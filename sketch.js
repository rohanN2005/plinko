const Engine = Matter.Engine;
const World= Matter.World;
const Bodies =Matter.Bodies;


var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var frames = 0;


for(var k = 0; k<=innerWidth; k = k + 80){
  divisions.push(new Divisions(k, 800-divisionHeight/2,10,divisionHeight));
}
for (var j = 40; j<=innerWidth; j=j+50){
  plinkos.push(new Plinko(j,75));
}
for (var j = 15; j<innerWidth-1; j=j+50){
  plinkos.push(new Plinko(j,175))

}
for (var j = 40; j<=innerWidth; j=j+50){
  plinkos.push(new Plinko(j,75));
}
for(var j = 0; j < particles.length; j++){
  particles[j].display();
}

/*for (var k = 0; k < divisions.length; k++){
  divisions[k].display();
}*/

//console.log(Divisions)

var engine, world;
//var weight = -1;
function setup() {
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,600,1200,20);
  
  createCanvas(750,600);
  
}

function draw() {
  background("blue");  
  Engine.update(engine);

  

  

  ground.display()

  

  plinkos.forEach((plinko,index) => plinko.display() )

  divisions.forEach((division,index) => division.display() )

  while(frames >= 90){
    part = new Particle(400,50);
    particles.push(part)
    frames = 0;
  }

  particles.forEach((particle,index) => particle.display() )
  frames++;


}



