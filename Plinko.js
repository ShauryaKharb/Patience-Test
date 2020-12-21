class Plinkos{
    constructor(x,y){
        var options={
            restitution : 1,
            density : 2,
            friction : 0.1
        }
        this.body=MyBodies.circle(x,y,10,options);
        MyWorld.add(world,this.body);
        this.color=color(random(0,255),random(0,255),random(0,255));
    }
    display(){
        ellipseMode(CENTER);
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        fill(this.color);
        ellipse(0,0,20,20);
        pop();
    }
}