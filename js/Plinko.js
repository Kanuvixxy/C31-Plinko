class Plinko {
    constructor(x, y) {
      var options = {
          isStatic: true,
          friction: 2, 
          restitution: 1
      }
      
      this.body = Bodies.circle(x, y, 10, options);
      this.radius = 10;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      ellipse(pos.x, pos.y, this.radius, this.radius);
    }
  };