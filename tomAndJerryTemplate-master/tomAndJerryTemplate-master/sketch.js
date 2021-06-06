var garden, gardenImg, cat, catImg1, catImg2, mouse, mouseImg1,  mouseImg2, cat, catImg3;

function preload() {
    //load the images here
    gardenImg=loadImage("images/garden.png");
    catImg1=loadAnimation("images/cat1.png");
    mouseImg1=loadAnimation("images/mouse1.png");
    catImg2=loadAnimation("images/cat2.png" , "images/cat3.png");
    mouseImg2=loadAnimation("images/mouse2.png" , "images/mouse3.png")
    catImg3-loadImage("images/cat4.png")

}

function setup(){
    createCanvas(1000,800);
    garden=createSprite(500,400);
   

    //create tom and jerry sprites here
    mouse=createSprite(80,100);
    cat=createSprite(100,100);

   
}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
     if(cat.x-mouse.x<(cat.width-mouse.width)/2){
         cat.changeImage(catImg3);
         

     }
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      mouse.addAnimation("images/mouseTeasing" , mouseImg2);
      mouse.changeAnimation("images/mouseTeasing");
      mouse.frameDelay=25;
  }


}
