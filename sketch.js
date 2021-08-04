  var garden,rabbit,apple,orangeleaf,redleaf;
  var gardenImage,rabbitImage,appleImage,orangeleafImage,redleafImage;

  function preload(){
    gardenImage = loadImage("garden.png");
    rabbitImage = loadImage("rabbit.png"); 
    appleImage  = loadImage ("apple.png");
    orangeleafImage = loadImage("orangeLeaf.png");
    redleafImage = loadImage("redImage.png");

  }
  function setup(){
    
    createCanvas(400,400);
    
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImage);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImage);
  }


  function draw() {
    background(0);
    rabbit.x = World.mouseX;
    edges= createEdgeSprites();
    rabbit.collide(edges);

    

  var value_sprites = Math.round(random(1,3));

  if (frameCount % 80 === 0){


  if (value_sprites === 1){
    createapple();
  }

  else if (value_sprites === 2){
    createorangeleaf();
  }

  else{
    createredleaf();
  }
  }
  drawSprites();
}
  

  function createapple(){
  
  apple = createSprite(random(52,354),43,10,10 );
  apple.addImage(appleImage);
  apple.scale = 0.05
  apple.velocityY= 3;
  }


  function  createorangeleaf()
  {
    
    orangeleaf = createSprite(random(52,354),43,10,10 );
    orangeleaf.addImage(orangeleafImage);
    orangeleaf.scale = 0.05
    orangeleaf.velocityY = 3;
   }
   
function  createredleaf()
  {
    redleaf = createSprite(random(52,354),43,10,10 );
    redleaf.addImage(redleafImage);
    redleaf.scale = 0.05
    redleaf.velocityY = 3;
  }
  
 


  