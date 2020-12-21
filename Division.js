class Division{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        this.body=MyBodies.rectangle(x,y,w,h,options);
        MyWorld.add(world,this.body);
        this.width=w;
        this.height=h;
    }
    display(){
        rectMode(CENTER);
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        fill("white");
        rect(0,0,this.width,this.height);
        pop();
    }
}