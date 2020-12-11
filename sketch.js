const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;
var log2;
var log3;
var log4;
var box3;
var box4;
var box5;
var pig2

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1= new Pig(810,350);
    pig2= new Pig(810,250);
    box3= new Box(700,250,70,70);
    box4= new Box(920,250,70,70);
    box5= new Box(810,60,70,70);
    ground = new Ground(600,height,1200,20);
    log1=new Log(810,250,300,PI/2);
    log2=new Log(810,160,300,PI/2);
    log3=new Log(760,60,150,PI/7)
    log4=new Log(870,60,150,-PI/7)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    log2.display();
    log3.display();
    log4.display();
    pig1.display();
    pig2.display();
    ground.display();
    log1.display();
}