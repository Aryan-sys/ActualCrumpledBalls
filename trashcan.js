class trashcan {
    constructor(x, y, width, height) {
        var options={
            isStatic: true,
            restitution : 0.3,
            friction : 0.5,
            density: 1.2

        }
        this.body = Bodies.rectangle(x, y, width, height, options );
        this.height = height;
        this.width = width;
        this.image = loadImage("dustbingreen.png")
      
    }
    display(){
     var position = this.body.position;
        push();

        fill("green");
        imageMode(CENTER);
      image(this.image,position.x,position.y, this.width, this.height);
        pop();
      }
    };                                                                                                                                                          