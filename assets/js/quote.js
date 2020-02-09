$(window).on('load', (function() {

$("#quoteForm").hide();

}));

$(".style1").click(function(){
  $(".stairSylesStep").hide();
  $("#quoteForm").show();
  $("#file").hide();
  $("#balustrade").hide();
  $("#stairMeasurements").hide();
  $('#joistOptions').hide();
  $('#landing').hide();
  $('#landingYes').hide();
  $('#landingNo').hide();
  $('#turnLeftStyle').hide();
  $('#straightStyle').show();
  $('#quoteName').show();

});

$(".style2").click(function(){
  $(".stairSylesStep").hide();
  $("#quoteForm").show();
  $("#file").hide();
  $("#balustrade").hide();
  $("#stairMeasurements").hide();
  $('#joistOptions').hide();
  $('.straightStairMeasurements').hide();
  $('#joist').hide();
  $('#landingYes').hide();
  $('#landingNo').hide();
  $('#turnLeftStyle').show();
  $('#straightStyle').hide();
  $('#quoteName').show();
});






// Standard Form Logic

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

$(".questionA").click(function(){
  $(".answerA").html('This is the total height from top of floor to top of floor.')
});

$(".questionB").click(function(){
  $(".answerB").html('This is the total length of the stair from where it starts to where you want it to end on the floor below.')
});


$(".questionC").click(function(){
  $(".answerC").html('This is the total width of the stair. Please include if the measurement is O.S.M (Outside Stringer Measurement) or R.O. (Rough Opening).')
});

$("#questionD").click(function(){
  $("#answerD").html('The horizontal distance from where you start to walk down the stairs to the point where you could hit your head.')
});

$("#questionJoist").click(function(){
  $("#answerJoist").html('A horizontal support member that holds up walls, beams, ceilings and floors that you could possibly hit your head on.')
});

$("#questionE").click(function(){
  $("#answerE").html('Joists are typically constructed from wood, concrete or steel.')
});

$("#questionF").click(function(){
  $("#answerF").html('This is the height at the point where you could hit your head and is usually measured from the underside of the joist.')
});

$("#questionG").click(function(){
  $("#answerG").html('The horizontal distance from where you start to walk down the stair to the point where you could hit your head.')
});

$("#questionRiser").click(function(){
  $("#answerRiser").html('Closed risers have risers in the stair where as open risers have no risers in the stair.')
});

$("#questionStringer").click(function(){
  $("#answerStringer").html('Closed stringer is also known as "western" or "housed". Open stringer is also known as "eastern" or "carriage".')
});




// Joist Options

$("input[name=radio-joist]").on( "change", function() {

  var test = $(this).val();
  if (test == 'Yes') {
    $('#joistOptions').show();
  } else {
    $('#joistOptions').hide();
  }
 
} );

// Landing options

$("input[name=radio-landing]").on( "change", function() {

  var test = $(this).val();
  if (test == 'Yes') {
    $('#landingYes').show();
    $('#joist').show();
    $('#landingNo').hide();
  } 
  if (test == 'No') {
    $('#landingYes').hide();
    $('#joist').show();
    $('#landingNo').show();
  }
 
} );