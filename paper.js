class paper{
  constructor(){
      var options={
          isStatic: false,
          restitution : 0.5,
          friction : 0.5,
          density: 1.2

      }
      this.image = loadImage("here.png");
   
      this.body = Matter.Bodies.circle(50 , 620, 25, options);

      World.add(world,this.body)
      
  }
  display(){
   var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      
      fill("blue");
     
      ellipse(0,0,25,25);
      imageMode(CENTER);
      image(this.image,0,0,this.RADIUS);
      pop();
    }
  }
