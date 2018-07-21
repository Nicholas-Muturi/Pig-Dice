/*..............FRONT END..............*/
$(document).ready(function(){
  $("form#usernameForm").submit(function(event){
    event.preventDefault();

    //Checks Game Mode
    if( $("#multiplayerDiv:hidden").length !== 0 ){
      console.log("this is singplayer");
    } else {
      console.log("this is multiplayer");
    }

    startGame();
    var playerOneInput = $("input#playerOneInput").val();
    var playerTwoInput = $("input#playerTwoInput").val();
    var playerOneStatus = $("#player1Name").attr("class");
    var playerTwoStatus = $("#player2Name").attr("class");

    var playerOne = new Player(playerOneInput, playerOneStatus, 0, 0);
    var playerTwo = new Player(playerTwoInput, playerTwoStatus, 0, 0);

    $("#player1Name").text(playerOne.name);
    $("#player2Name").text(playerTwo.name);
    $("#player1OverallScore").text(playerOne.overallScore).addClass("animated rollIn");
    $("#player2OverallScore").text(playerTwo.overallScore).addClass("animated rollIn");
    $("#playerOneTurnScore").text(playerOne.turnScore);
    $("#playerTwoTurnScore").text(playerOne.turnScore);
    clearForm();

    /*...............ROLL DICE EVENT LISTENER.................*/
    $("#rollDiceButton").click(function(){
      playerOne.status = $("#player1Name").attr("class");
      playerTwo.status = $("#player2Name").attr("class");
      var diceRoll;

      /*............UPDATES TURN SCORES FOR EACH PLAYER
      ..................BASED ON WHO'S TURN IT IS.................*/
      if(playerOne.status == "activeTurn"){
        diceRoll = playerOne.rollDice();
        if(diceRoll != 1){
          $("#dice").text(diceRoll);
          playerOne.turnScore += diceRoll;
          $("#playerOneTurnScore").text(playerOne.turnScore);
        }
        else{
          $("#dice").text(diceRoll);
          playerOne.turnScore = 0;
          $("#playerOneTurnScore").text("0");
          switchPlayerTurn();
        }
      }
      else {
        diceRoll = playerTwo.rollDice();
        if(diceRoll != 1){
          $("#dice").text(diceRoll);
          playerTwo.turnScore += diceRoll;
          $("#playerTwoTurnScore").text(playerTwo.turnScore);
        }
        else {
          $("#dice").text(diceRoll);
          playerTwo.turnScore = 0;
          $("#playerTwoTurnScore").text("0");
          switchPlayerTurn();
        }
      }
    });

    /*...............RHOLD BUTTON EVENT LISTENER.................*/
    $("#holdButton").click(function(){
      playerOne.status = $("#player1Name").attr("class");
      playerTwo.status = $("#player2Name").attr("class");

      /*...............UPDATES OVERALL SCORES FOR EACH PLAYER
      ..................BASED ON WHO'S TURN IT IS.................*/
      if(playerOne.status == "activeTurn"){
        playerOne.hold();
        $("#player1OverallScore").text(playerOne.overallScore);
        $("#playerOneTurnScore").text(playerOne.turnScore);
        switchPlayerTurn();
      }
      else {
        playerTwo.hold();
        $("#player2OverallScore").text(playerTwo.overallScore);
        $("#playerTwoTurnScore").text(playerTwo.turnScore);

        switchPlayerTurn();
      }

      /*...............Checks For Winner.................*/
      if(playerOne.overallScore >= 100){
        alert(playerOne.name+ " is a Winner Winner Chicken Dinner!");
        resetGame();
      }
      else if(playerTwo.overallScore >= 100) {
        alert(playerTwo.name+ " is a Winner Winner Chicken Dinner!");
        resetGame();
      }
    });

  }); //End of Form Submit

  function startGame(){
    $(".landing-menu").hide();
    $(".game-section").show();
    $(".userButtons").show();
  }
  function clearForm(){
    $("input#playerOneInput").val("");
    $("input#playerTwoInput").val("");
    $("form#usernameForm").slideUp("slow");
  }

  function switchPlayerTurn(){
    $("#player1Name").toggleClass("activeTurn");
    $("#player2Name").toggleClass("activeTurn");
  }

  function resetGame(){
    $(".game-section").hide();
    $(".userButtons").hide();
    $(".landing-menu").show();
  }
});//End of JQuery




/*..............BACK END..............*/
function Player(name,status,ovScore,turnScore){
  this.name = name;
  this.status = status;
  this.overallScore = ovScore;
  this.turnScore = turnScore;
}

Player.prototype.rollDice = function () {
  var randomNo = Math.floor(Math.random()*6)+1;
  return randomNo;
};

Player.prototype.hold = function () {
  this.overallScore += this.turnScore;
  this.turnScore = 0;
};
