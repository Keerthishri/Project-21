var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    

    //create 4 different surfaces

    box = createSprite (random(20, 750), 30, 50, 50);
    box. shapeColor = "white"
    surface1 = createSprite (100 ,580, 200, 30);
    surface1.shapeColor="orange";
    surface2 = createSprite (300 ,580, 200, 30);
    surface2.shapeColor="green";
    surface3 = createSprite (500 ,580, 200, 30);
    surface3.shapeColor="blue";
    surface4 = createSprite (700 ,580, 200, 30);
    surface4.shapeColor="magenta";

    music.play();



    //create box sprite and give velocity
    box. velocityX = 3;
    box. velocityY = 3;
    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    Edges = createEdgeSprites()
     box.bounceOff (Edges);
     //box.bounceOff (Edges[2]);
     //box.bounceOff (Edges[3]);
     //box.bounceOff (Edges[4]);


    //add condition to check if box touching surface and make it box
    

    if(surface1.isTouching(box) || box.bounceOff (surface1)){
        box.shapeColor = "orange";
        box.velocityX = 0;
        box.velocityY = 0;
        music. stop();
    }
    if(surface2.isTouching(box) || box.bounceOff (surface2)){
        box.shapeColor = "green";
        box.velocityX = 0;
        box.velocityY = 0;
        music. stop();
    }
    if(surface3.isTouching(box) || box.bounceOff (surface3)){
        box.shapeColor = "blue";
        box.velocityX = 0;
        box.velocityY = 0;
        music. stop();
    }
    if(surface4.isTouching(box) || box.bounceOff (surface4)){
        box.shapeColor = "magenta";
        box.velocityX = 0;
        box.velocityY = 0;
        music. stop();
    }

    

drawSprites();

}

