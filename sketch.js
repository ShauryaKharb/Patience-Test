const MyBodies=Matter.Bodies;
const MyEngine=Matter.Engine;
const MyWorld=Matter.World;
const Constraint=Matter.Constraint;

function setup() {
  createCanvas(480,800);

  engine=MyEngine.create();
  world=engine.world;

  base=new Division(240,795,480,10);

  lSide=new Division (-5,height/2,10,height);
  rSide=new Division (485,height/2,10,height);

  plinko=[];
  div=[];
  ball=[];

  for( var i =15 ; i<=width ; i+=50 ){
    plinko.push(new RDiv(i,75));
  }

  for( var i =35 ; i<=width ; i+=50 ){
    plinko.push(new RDiv(i,175));
  }

  for( var i =15 ; i<=width ; i+=50 ){
    plinko.push(new RDiv(i,275));
  }

  for( var i =35 ; i<=width ; i+=50 ){
    plinko.push(new RDiv(i,375));
  }

  var divHeight=300;
  for( var d = 0 ; d <= width ; d+=80){
    div.push(new Division(d,height-divHeight/2,10,divHeight));
  }
  
  
  
  //createSprite(400, 200, 50, 50);
}

function draw() {
  MyEngine.update(engine);
  background(0);

  base.display();

  SpawnPlinkos();

  for( var i =0 ; i < plinko.length ; i++ ){
    plinko[i].display();
  }

  for (var d = 0 ; d < div.length  ; d++){
    div[d].display();
  }

  for (var j = 0 ; j < ball.length  ; j++){
    ball[j].display();
  }
  

  drawSprites();
}

function SpawnPlinkos(){
  if(frameCount%60===0){
    
    ball.push(new Plinkos(random(10,470),20));
  }
}