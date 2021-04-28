class SlingShot{
    constructor(body,point){
        var options = {
            bodyA:body,
            pointB:point,
            stiffness:0.04,
            length:10
        }
        this.sling=Matter.Constraint.create(options);
        World.add(world,this.sling);
        this.point=point

    }
    display(){
        strokeWeight(4)
        if(this.sling.bodyA){
            line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.point.x,this.point.y);
        }

        
        
        
    }
    fly(){
        this.sling.bodyA=null
    }

    attach(body){
        this.sling.bodyA=body
    }
    
}