class Game {
    constructor() {}
  
getState(){
  var gameStateRef = database.ref("gameState")
  gameStateRef.on("value",data=>{
    gameState = data.val()
  })
}

    start() {
      player = new Player(); 
      player.getPlayerCount(); 

      //creating the new form 
      form = new Form();
      form.display();
      
  // creating the player sprites 
   p1 = createSprite(width/2,height-100); 
   p1.addImage("hand",handImage1);
   p1.addImage("redhand",redhandimg1)
   p1.scale = 0.5;

   p2 = createSprite(width/2,100); 
   p2.addImage("hand2",handImage2);
   p2.addImage("redhand2",redhandimg2)
  p2.scale = 0.5; 

  playerN = [p1,p2]; 

    }
    handleElements(){
      form.hide()
      form.titleImg.position(50,50)
      form.titleImg.class("gameTitleAfterEffect") 
    }

  

    update(state){
database.ref("/").update({
  gameState:state
})
    }

    play(){
      this.handleElements()
      Player.getPlayerInfo() 

     

      if (allPlayers !== undefined) {
        image(backgroundImage,0,0,width,height) 
        var i = 0
        for(var plr in allPlayers )
        i = i+1 
        var playerposX =  allPlayers[plr].positionX 
        var playerposY =  allPlayers[plr].positionY 

        playerN[i-1].position.x = playerposX
        playerN[i-1].position.y = playerposY 

        if (i === player.index) {
          stroke(5)
          fill("blue")
          ellipse(playerposX,playerposY,60,100)
         camera.position.y = playerN[i-1].position.y
        }

      //if (playerN[i-1].isTouching(playerN[i])) {   
        // playerN[i-1].position.y += -100
      
     // }
      if (keyCode === 32) {
        playerN[i-1].position.y += -100 
      }
      }
      
    drawSprites();
    }
    
  }
  