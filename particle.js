class Particle{
    constructor(x,y) {
    var options = {

        isStatic: false
    }

    this.body = Bodies.circle(x,y,10,options);
    this.radius = 10;
    //World.add(world, this.body);
}
display()  {
    var pos = this.body.position;
    ellipseMode(CENTER);
    fill("green");
    ellipse(pos.x, pos.y, this.radius,this.radius);
}
};