$(window).on('load', (function() {

$("#advanced").hide();
$("#balustrade").hide();
$("#file").hide();
$("#stairMeasurements").hide();

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

