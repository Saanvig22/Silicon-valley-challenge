class Form {
    constructor() {
      this.input = createInput("").attribute("placeholder", "Enter your name");
      this.playButton = createButton("Play");
      this.titleImg = createImg("title.jpg", "game title");
      this.greeting = createElement("h2");
    }
  
    setElementsPosition() {
      this.titleImg.position(120,50);
      this.input.position(width / 2 - 110, height / 2 - 40);
      this.playButton.position(width / 2 - 70, height / 2 + 20);
      this.greeting.position(width / 2 - 300, height / 2 - 100);
    }
  
    setElementsStyle() {
      this.titleImg.class("gameTitle");
      this.input.class("customInput");
      this.playButton.class("customButton");
      this.greeting.class("greeting"); 
    }
   
    hide() {
      this.greeting.hide();
      this.playButton.hide();
      this.input.hide(); 
    }
    handleMousePressed(){
      this.playButton.mousePressed(()=>{
        this.playButton.hide()
        this.input.hide()
     var message = ` Hello ${this.input.value()}`;  
     this.greeting.html(message)
     playerCount++
     player.name = this.input.value()
     player.index = playerCount 
     player.addPlayer() 
     player.updateCount(playerCount) 
      })
    }
    display() {
      this.setElementsPosition();
      this.setElementsStyle();
      this.handleMousePressed(); 
    }
  
  }