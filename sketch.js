var canvas;
var music;
var ball;
var block1, block2, block3;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    ball=createSprite(random(20,750));
    ball.velocityX=2;
    ball.shapeColor="white";

    block1=createSprite(775,595,70,10);
    block1.shapeColor="green";
    block2=createSprite(655,595,70,10);
    block2.shapeColor="pink";
    block3=createSprite(535,595,70,10);
    block3.shapeColor="orange";
    block4=createSprite(415,595,70,10);
    block4.shapeColor="blue";
    
}

function draw() {
    background(rgb(169,169,169));
    background("black");
    //create edgeSprite
    createEdgeSprites();
    drawSprites();


    //add condition to check if box touching surface and make it box 
}