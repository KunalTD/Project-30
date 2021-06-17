class Block{
    constructor(x, y, width, height) {
        var options = 
        {
               restituition: 0.8,
               friction: 0.1,
               density: 0.5,
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image=loadImage("block.png");
        this.visibility = 255;
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        
        if(this.body.speed<3)
        {
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image, 0,0,this.width, this.height);
          pop();
        }

        else
        {
          World.remove(world, this.body)
          push();
          this.visibility=this.visibility-5
          tint(255,this.visibility);
          image(this.image, this.body.position.x, this.body.position.y, this.width,this.height);
          pop();
        }
        
       
      }
}
