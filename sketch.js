var trex ,trex_running;

function preload(){
trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png")
groundimage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50, 160, 40, 40)
 trex.addAnimation("running", trex_running)
 trex.scale = 0.5
 ground = createSprite(300, 180, 600, 20)
 ground.addImage(groundimage)
 groundnew = createSprite(300, 190, 600, 20)
 groundnew.visible = false
}

function draw(){
  background("lightgrey")
  //console.log(trex.y)
  if(ground.x < 0){
    ground.x = ground.width/2
  }
  ground.velocityX = -6
  if(keyDown ("space") && trex.y > 156){
   trex.velocityY = -10 
  }
  trex.velocityY += 0.5

  trex.collide(groundnew)
  drawSprites()
}