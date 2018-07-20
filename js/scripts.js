$(document).ready(function(){
  $("form#usernameForm").submit(function(event){
    event.preventDefault();

    var playerOneInput = $("input#playerOneInput").val();
    var playerTwoInput = $("input#playerTwoInput").val();

    var player1 = new Player(playerOneInput);
    var player2 = new Player(playerTwoInput);

    $("h2#player1Name").text(player1.name);
    $("h2#player2Name").text(player2.name);
    $("h2#player1OverallScore").text("0").addClass("animated rollIn");
    $("h2#player2OverallScore").text("0").addClass("animated rollIn");
    clearForm();

  });

  function clearForm(){
    $("input#playerOneInput").val("");
    $("input#playerTwoInput").val("");
    $("form#usernameForm").slideUp("10000");
  }

});

function Player(name){
  this.name = name;
  var overallScore;
  var turnTotalScore;
}

Player.prototype.rollDice = function () {

};

Player.prototype.hold = function () {

};

function calcOverallScore(){

}

function calcTurnTotal() {

};
