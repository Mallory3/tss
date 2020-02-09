$(window).on('load', (function() {

$("#advanced").hide();
$("#balustrade").hide();
$("#file").hide();
$("#stairMeasurements").hide();
$("#stairStyleForm").hide();
$("#quoteForm").hide();
$("#step").html('Step 1: Choose Your Stairs');

}));

$("#advancedButton").click(function(){
  $("#advanced").toggle();

});


$("#balustradeButton").click(function(){
  $("#balustrade").toggle();

});

$("#fileButton").click(function(){
  $("#file").toggle();

});

$("#stairButton").click(function(){
  $("#stairMeasurements").toggle();

});

$("#straightStairButton").click(function(){
  $("#quoteContainer").hide();
  $("#stairStyleForm").show();
  $("#step").html('Step 2: Choose Your Style of Stairs')

});

$("#outdoorStairButton").click(function(){
  $("#quoteContainer").hide();
  $("#stairStyleForm").show();
  $("#step").html('Step 2: Choose Your Style of Stairs')

});

$("#constructionStairButton").click(function(){
  $("#quoteContainer").hide();
  $("#stairStyleForm").show();
  $("#step").html('Step 2: Choose Your Style of Stairs')

});

$("#customStairButton").click(function(){
  $("#quoteContainer").hide();
  $("#quoteForm").show();

});

$("#back1").click(function(){
  $("#quoteContainer").show();
  $("#stairStyleForm").hide();

});

$("#questionA").click(function(){
  $("#answerA").html('This is the total height from top of floor to top of floor.')
});

$("#questionB").click(function(){
  $("#answerB").html('This is the total length of the stair from where it starts to where you want it to end on the floor below.')
});


$("#questionC").click(function(){
  $("#answerC").html('This is the total width of the stair.')
});

$("#questionD").click(function(){
  $("#answerD").html('The horizontal distance from where you start to walk down the stairs to the point where you could hit your head.')
});

