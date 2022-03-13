class Cara {
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':20,
        }
        this.image=loadImage("a.png");
        this.body = Bodies.rectangle(x, y, 150,70, options);
     
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
     
        push();
        
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        image(this.image,-90,-60)
        
        pop();
      }
    }