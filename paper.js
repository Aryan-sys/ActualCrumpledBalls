class paper{
  constructor(){
      var options={
          isStatic: false,
          restitution : 0.5,
          friction : 0.5,
          density: 1.2

      }
      this.body = Matter.Bodies.circle(50 , 620, 25, options );

      World.add(world,this.body)
      console.log(this.body.position.y);
  }
  display(){
   var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS)
      fill("blue");
    ellipse(0,0,25,25);
      pop();
    }
  };
