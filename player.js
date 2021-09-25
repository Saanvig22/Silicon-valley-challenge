class Player{

    constructor(){
        this.name = null
        this.index = null
        this.positionX = 0
        this.positionY = 0

    }   

    

addPlayer(){ 
    var playerIndex = "Players/player"+this.index
    if (this.index === 1) {
        this.positionX = width/2
        this.positionY = height-100
    
    }
    else{
        this.positionX = width/2 
        this.positionY = 100 
    }
    database.ref(playerIndex).set({
        name:this.name,
        positionX:this.positionX,
        positionY:this.positionY,
    })
} 

getPlayerCount(){
    var playerCountRef = database.ref("playerCount")
    playerCountRef.on("value",data=>{
    playerCount = data.val()
    }) 
}

updateCount(count){
database.ref("/").update({
    playerCount:count
})
}

static getPlayerInfo(){
    var playerInfo = database.ref("Players") 
playerInfo.on("value",data=>{
    allPlayers = data.val()
})
    
   
}

}