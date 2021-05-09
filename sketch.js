var cat,catimg1,catimg2,catimg3;
var bg,bgimg;
var mouse,mouseimg1,mouseimg2,mouseimg3;

function preload() {
    //load the images here
    bgimg=loadImage("garden.png");

    catimg1=loadAnimation("cat1.png");
    catimg2=loadAnimation("cat2.png","cat3.png");
    catimg3=loadAnimation("cat4.png");

    mouseimg1=loadAnimation("mouse1.png");
    mouseimg2=loadAnimation("mouse2.png","mouse3.png");
    mouseimg3=loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg=createSprite(500,400,10,10);
    bg.addImage("bgimg",bgimg);
    bg.scale=1.25;

    cat=createSprite(830,700);
    cat.addAnimation("catimg1",catimg1);
    cat.scale=0.2;

    mouse=createSprite(100,700);
    mouse.addAnimation("mouseimg1",mouseimg1);
    mouse.scale=0.19;


}

function draw() {

    background("lightblue");
    
    cat.depth=mouse.depth;
        //Write condition here to evalute if tom and jerry collide
      if(cat.x-mouse.x <= 175||cat.x-mouse.x <=cat.width/2-mouse.width/2){
         
        cat.velocityX=0;

          mouse.addAnimation("mousesearching",mouseimg3);
          mouse.changeAnimation("mousesearching");

          cat.addAnimation("catRunning",catimg3);
          cat.changeAnimation("catRunning");

         
      }
        console.log(cat.x-mouse.x)

    movement();
    drawSprites();
}

function movement(){
  //For moving and changing animation write code here
  if(keyDown("left_arrow")) {
    cat.velocityX=-3;

    cat.addAnimation("catimg2",catimg2);
    cat.changeAnimation("catimg2");

    mouse.addAnimation("mouseimg2",mouseimg2);
    mouse.changeAnimation("mouseimg2");

    }
}

 