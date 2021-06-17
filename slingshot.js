class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        
    }

    fly(){
        this.sling.bodyA = null;
    }


    attach(body){
        this.sling.bodyA = body;
    }
    display(){


        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x<220)
            {
                strokeWeight(6);
                stroke("BLACK");
                line(pointA.x-20, pointA.y, pointB.x, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+35, pointB.y);
                
            }
            else
            {
                strokeWeight(3.5);
                stroke("BLACK");
                line(pointA.x-20, pointA.y, pointB.x, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+35, pointB.y);
                
            }
        }
    }
    
}