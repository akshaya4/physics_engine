const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine;
var world;
var object;
var ground;
var ball;
function setup()
{
    createCanvas(1000,600);
    engine=Engine.create();
    world=engine.world;
    var object_options={
        isStatic:true
    }
    object=Bodies.rectangle(200,200,70,90,object_options);
    
    console.log(object);
    console.log(object.position.x,object.position.y);
    World.add(world,object);
    var ground_options={
        isStatic:true
    }
    ground=Bodies.rectangle(500,600,600,30,ground_options);
    World.add(world,ground);
    var ball_options={
        restitution:1.0
    }
    ball=Bodies.circle(500 ,200,40,ball_options);
    World.add(world,ball);
    console.log(ball);
}
function draw()
{
    background("black");
    Engine.update(engine);
    rectMode("center");
    rect(object.position.x,object.position.y,80,100);
    fill("green");
    rect(ground.position.x,ground.position.y,1000,30);
    ellipseMode("CENTER");
    ellipse(ball.position.x, ball.position.y, 30, 30);
   //ellipse(500 ,200, 30, 30);
}