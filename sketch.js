var tom,tomImg,mouse,mouseImg;
var gardenImg,tomImg2,garden;
var tomImg3,mouseImg2,mouseImg3;


function preload() {
    //load the images here
gardenImg = loadImage("garden.png");
tomImg = loadImage("cat1.png");
tomImg2 = loadAnimation("cat2.png","cat3.png");
tomImg3 = loadAnimation("cat4.png");

mouseImg = loadImage("mouse1.png");
mouseImg2 = loadAnimation("mouse2.png","mouse3.png");
mouseImg3 = loadAnimation("mouse4.png");  
 
  gardenImg= loadImage("garden.png");


}

function setup(){
    createCanvas(600,600);
    //create tom and jerry sprites here
 garden = createSprite(300,300);
  garden.addImage(gardenImg)
  garden.scale = 0.86;
  
  
  tom = createSprite(500,500);
  tom.addImage(tomImg);
tom.scale = 0.1;
  
  mouse = createSprite(100,500);
  mouse.addImage(mouseImg)
mouse.scale = 0.1;
}

function draw() {

    background("white");
    //Write condition here to evalute if tom and jerry collide
if(tom.x - mouse.x <(tom.width - mouse.width)/2){

tom.addAnimation("catStopping",tomImg3)
tom.changeAnimation("catStopping")
tom.x= 160;
  tom.velocityX = 0;

mouse.addAnimation("mouseStopping",mouseImg3) 
mouse.changeAnimation("mouseStopping")
  
}

  
  
  
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
tom.velocityX = -5;
tom.addAnimation("catRunning",tomImg2)
tom.changeAnimation("catRunning");

mouse.addAnimation("mouseMoving",mouseImg2)
mouse.changeAnimation("mouseMoving");

}




}

