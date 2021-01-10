class Chain {
    constructor(bodyA, pointB) {
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 1.2,
        length: 250,
      };
  
      this.pointB = pointB;
      this.rope1 = Constraint.create(options);
      World.add(world, this.rope1);
    }
    attach(body) {
      this.rope1.bodyA = body;
    }
  
    display() {
      if (this.rope1.bodyA) {
        var pointA = this.rope1.bodyA.position;
        var pointB = this.pointB;
        push();
  
        stroke(48, 22, 8);
        strokeWeight(3);
  
        line(pointB.x, pointB.y, pointA.x, pointA.y);
  
        pop();
      }
    }
  }
  