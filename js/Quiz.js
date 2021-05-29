class Quiz {
  constructor() { }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

  async start() {
    if (gameState === 0) {
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if (contestantCountRef.exists()) {
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play() {
    //write code to change the background color here
    if (contestant.answer == 2) {
      background("blue")
      console.log("Correct!")
    } else if (contestant.answer == 1 || contestant.answer == 3 || contestant.answer == 4) {
      background("orange")
      console.log("Wrong!")
    }


    //call getContestantInfo( ) here

    if (allContestants !== undefined) {
      fill("blue")
      textSize(20)
      text("NOTE:The player who answered correctly have the background and the name the color green/blue! But if he/she is wrong then both of those are red/orange.", 130, 230)
    }

    //write code to highlight contest who answered correctly
   for (var plr in allContestants) {
      var correctAns = "2"
      console.log("blue"+plr)
      if (correctAns === allContestants[plr].answer) {  
        fill("green")
        console.log("Green"+plr)
      } else {
        fill("red")
        console.log("red"+plr)
      }
    }
 /*   for(var plr=0; plr<3;plr=plr+1){
      console.log("for is working"+plr)
    }*/
  }
  
}
