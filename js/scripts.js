$(document).ready(function(){
  $("form#usernameForm").submit(function(event){
    event.preventDefault();
    var playerOneInput = $("input#playerOneInput").val();
    var playerTwoInput = $("input#playerTwoInput").val();
    var playerOneStatus = $("#player1Name").attr("class");
    var playerTwoStatus = $("#player2Name").attr("class");


    var player1 = new Player(playerOneInput, playerOneStatus, 0, 0);
    var player2 = new Player(playerTwoInput, playerTwoStatus, 0, 0);

    $("#player1Name").text(player1.name);
    $("#player2Name").text(player2.name);
    $("#player1OverallScore").text(player1.overallScore).addClass("animated rollIn");
    $("#player2OverallScore").text(player2.overallScore).addClass("animated rollIn");
    clearForm();

    $("#rollDiceButton").click(function(){
      var random = randomizer();
      $("#dice").text(random);
    });

    $("#holdButton").click(function(){
      switchPlayerTurn();
      player1.status = $("#player1Name").attr("class");
      player2.status = $("#player2Name").attr("class");

      if(player1.status == "activeTurn"){
        console.log("player 1 is now active");
      }else {
        console.log("Player 1 is not active")
      }

    });

  });
  function clearForm(){
    $("input#playerOneInput").val("");
    $("input#playerTwoInput").val("");
    $("form#usernameForm").slideUp("10000");
  }

  function switchPlayerTurn(){
    $("#player1Name").toggleClass("activeTurn");
    $("#player2Name").toggleClass("activeTurn");
  }

});

function Player(name,status,ovScore,turnScore){
  this.name = name;
  this.status = status;
  this.overallScore = ovScore;
  this.turnScore = turnScore;
}

Player.prototype.rollDice = function () {

};

Player.prototype.hold = function () {

};

function calcOverallScore(){

}

function calcTurnTotal() {

};

function randomizer(){
  return Math.floor(Math.random()*6)+1;
}
