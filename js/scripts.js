$(document).ready(function(){
  $("form#usernameForm").submit(function(event){
    event.preventDefault();
    var playerOneInput = $("input#playerOneInput").val();
    var playerTwoInput = $("input#playerTwoInput").val();
    var playerOneStatus = $("#player1Name").attr("class");
    var playerTwoStatus = $("#player2Name").attr("class");


    var player1 = new Player(playerOneInput, playerOneStatus);
    var player2 = new Player(playerTwoInput, playerTwoStatus);

    var allPlayers = [player1, player2];

    $("h2#player1Name").text(player1.name);
    $("h2#player2Name").text(player2.name);
    $("h2#player1OverallScore").text("0").addClass("animated rollIn");
    $("h2#player2OverallScore").text("0").addClass("animated rollIn");
    clearForm();

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

function Player(name,status){
  this.name = name;
  this.status = status;
  overallScore: 0;
  turnTotalScore: 0;
}

Player.prototype.rollDice = function () {

};

Player.prototype.hold = function () {

};

function calcOverallScore(){

}

function calcTurnTotal() {

};
