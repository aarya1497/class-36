class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1 = createSprite(100,200);
    car1.addImage(c1img);
    car2 = createSprite(300,200);
    car2.addImage(c4img);
    cars = [car1, car2];
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      var display_position = 130;

      var index=0;
      var cx = 200;
      var cy = 200;
      
      
      for(var plr in allPlayers){
        background("black");
        image(track,-50,-displayHeight*4,displayWidth + 300,displayHeight*5);
        index = index+1 ;
        cx = cx+ 400;
        cy = displayHeight - allPlayers[plr].distance;

        cars[index-1].x = cx;
        cars[index-1].y = cy;
        

        if (index === player.index){
          cars[index - 1].shapeColor = "blue"; 
          camera.position.x = displayWidth / 2;
          camera.position.y = cars[index-1].y;
        }
       /* if (plr === "player" + player.index)
          fill("red")
        else
          fill("black");
*/
      //  display_position+=20;
      //  textSize(15);
      //  text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    drawSprites();
    
  }
}








