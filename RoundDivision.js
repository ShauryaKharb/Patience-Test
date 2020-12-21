class RDiv{
    constructor(x,y){
        var options={
            isStatic : true
        }
        this.body=MyBodies.circle(x,y,10,options);
        MyWorld.add(world,this.body);
    }
    display(){
        ellipseMode(CENTER);
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        fill("white");
        ellipse(0,0,20,20);
        pop();
    }
}