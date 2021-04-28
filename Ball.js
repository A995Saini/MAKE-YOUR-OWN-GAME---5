class Ball{
    constructor(x,y,r){
        this.body=Bodies.circle(x,y,r);
        World.add(world,this.body);
        this.image=loadImage("BLUEBALL2.png");
        this.r=r
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);
    }
    
}
