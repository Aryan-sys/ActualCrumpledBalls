class Ground {
    constructor(){
        var options={
            isStatic: true,
            
            

        }
        this.body = Matter.Bodies.rectangle(200, 650, 2000, 10,options);

        World.add(world,this.body);
        
    }
    display(){
        var pos = this.body.position;
      push();
      translate(pos.x, pos.y); 
        rectMode(CENTER);
        rect(0,0,2000,10);
        pop();
    }
}