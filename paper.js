class paper{
  constructor(){
      var options={
          isStatic: false,
          restitution : 0,
          friction : 120,
          density: 1.2

      }
      this.image = loadImage("here.png");
   
      this.body = Matter.Bodies.circle(50 , 640, 60, options);

      World.add(world,this.body)
      
  }
  display(){
   var pos = this.body.position;
     push();
      translate(pos.x, pos.y);
      
      fill("blue");
     
      console.log(this.body);
      imageMode(RADIUS);
      image(this.image,0,0,70,70);
      pop();
    }
  }
