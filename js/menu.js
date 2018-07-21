$(document).ready(function(){
  $("#usernameForm").hide();
  $("#singlePlayer").click(function(){
    //console.log("here i am");
    $("#usernameForm").show().slideDown("slow");
    $("#singleplayerDiv").removeClass("col-md-6");
    $("#singleplayerDiv").addClass("col-md-12");
    $('#multiplayerDiv').css('display','none');
  });

  $("#multiPlayer").click(function(){
    $("#usernameForm").show().slideDown("slow");
    $('#multiplayerDiv').css('display','block');
    $("#singleplayerDiv").removeClass("col-md-12");
    $("#singleplayerDiv").addClass("col-md-6");
  });

  $("#aboutGame").click(function(){
    $(".landing-menu").slideUp();
    $("#usernameForm").slideUp();
  });




});
