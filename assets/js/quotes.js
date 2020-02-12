$(window).on('load', (function() {

  $("#quoteForm").hide();
  
  }));







var landingQuestionYes = '<div id="landingYes">' +

'<label>A) Total Height of Second Stair Riser <img class="questionMark" class="questionA" src="assets/images/question.svg"><div class="answerA" class="answer"></div><input type="text" name="TOTAL-HEIGHT-FROM-FLOOR-TO-FLOOR" value="" placeholder="" /></label>' +


'<label>A1) Total Height of First Stair Riser <img class="questionMark" id="questionA1" src="assets/images/question.svg"><div id="answerA1" class="answer"></div><input type="text" name="WIDTH-OF-STAIR" value="" placeholder="" /></label>' +


'<label>B) Total Run of Stair <img class="questionMark" class="questionB" src="assets/images/question.svg"><div class="answerB" class="answer"></div><input type="text" name="TOTAL-RUN-OF-STAIR" value="" placeholder="" /></label>' +

'<label>B1) Total Run of First Stair <img class="questionMark" id="questionB1" src="assets/images/question.svg"><div id="answerB1" class="answer"></div><input type="text" name="WIDTH-OF-STAIR" value="" placeholder="" /></label>' +

'<label>C) Width of Bottom Stair Riser <img class="questionMark" class="questionC" src="assets/images/question.svg"><div class="answerC" class="answer"></div><input type="text" name="WIDTH-OF-STAIR" value="" placeholder="" /></label>' +

'<label>C2) Width of Top Stair Riser <img class="questionMark" class="questionC1" src="assets/images/question.svg"><div class="answerC1" class="answer"></div><input type="text" name="WIDTH-OF-STAIR" value="" placeholder="" /></label>' +

'<label>D) Landing Dimensions <img class="questionMark" class="questionD" src="assets/images/question.svg"><div class="answerD" class="answer"></div><input type="text" name="WIDTH-OF-STAIR" value="" placeholder="" /> By <input type="text" name="WIDTH-OF-STAIR" value="" placeholder="" /></label>' +

'</div>'

var landingQuestionNo = '<div id="landingNo">' +

'<label>A) Total Height from Floor to Floor <img class="questionMark" class="questionA" src="assets/images/question.svg"><div class="answerA" class="answer"></div><input type="text" name="TOTAL-HEIGHT-FROM-FLOOR-TO-FLOOR" value="" placeholder="" /></label>' +


'<label>B) Total Run of Stair <img class="questionMark" class="questionB" src="assets/images/question.svg"><div class="answerB" class="answer"></div><input type="text" name="TOTAL-RUN-OF-STAIR" value="" placeholder="" /></label>' +

'<label>C) Width of Bottom Stair Riser <img class="questionMark" class="questionC" src="assets/images/question.svg"><div class="answerC" class="answer"></div><input type="text" name="WIDTH-OF-STAIR" value="" placeholder="" /></label>' +

'<label>C2) Width of Top Stair Riser <img class="questionMark" class="questionC1" src="assets/images/question.svg"><div class="answerC1" class="answer"></div><input type="text" name="WIDTH-OF-STAIR" value="" placeholder="" /></label>' +

'<label>D) Landing Dimensions <img class="questionMark" class="questionD" src="assets/images/question.svg"><div class="answerD" class="answer"></div><input type="text" name="WIDTH-OF-STAIR" value="" placeholder="" /> By <input type="text" name="WIDTH-OF-STAIR" value="" placeholder="" /></label>' +

'</div>'




// Standard Form Logic


function stairLogic() {

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

$("#questionRiser").click(function(){
  $("#answerRiser").html('Closed risers have risers in the stair where as open risers have no risers in the stair.')
});

$("#questionStringer").click(function(){
  $("#answerStringer").html('Closed stringer is also known as "western" or "housed". Open stringer is also known as "eastern" or "carriage".')
});

$("#questionJoist").click(function(){
  $("#answerJoist").html('A horizontal support member that holds up walls, beams, ceilings and floors that you could possibly hit your head on.')
});

}








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



$("#questionE").click(function(){
  $("#answerE").html('Joists are typically constructed from wood, concrete or steel.')
});

$("#questionF").click(function(){
  $("#answerF").html('This is the height at the point where you could hit your head and is usually measured from the underside of the joist.')
});

$("#questionG").click(function(){
  $("#answerG").html('The horizontal distance from where you start to walk down the stair to the point where you could hit your head.')
});




// Stair Form Buttons

function showStairForm() {
  $(".stairSylesStep").hide();
  $("#quoteForm").show();
  $("#balustrade").hide();
  $("#file").hide();
  $("#stairMeasurements").hide();

}


// Joist Options

var joistQuestionYes = '<div class="joistYes">' +

    '<div id="joistOptions">' +
        '<label>E) Joist Sytem Used <img class="questionMark" id="questionE" src="assets/images/question.svg">' +
            '<div id="answerE" class="answer"></div>' +
            '<input class="hideJoist" type="text" name="JOIST-SYSTEM-USED" value="" placeholder="" />' +
        '</label>' +

        '<label>F) Height from Underside of Joist to Floor <img class="questionMark" id="questionF" src="assets/images/question.svg">' +
            '<div id="answerF" class="answer"></div>' +
            '<input class="hideJoist" type="text" name="HEIGHT-FROM-UNDERSIDE-OF-JOIST-TO-FLOOR" value="" placeholder="" />' +
        '</label>' +

        '<label>G) Length of Stairwell to Headroom <img class="questionMark" id="questionG" src="assets/images/question.svg">' +
            '<div id="answerG" class="answer"></div>' +
            '<input class="hideJoist" type="text" name="LENGTH-FROM-UNDERSIDE-OF-JOIST-TO-FLOOR" value="" placeholder="" />' +
        '</label>' +
    '</div>' +
'</div>'

function joistQuestion() {
  $('#addJoistYes').html(joistQuestionYes);
}

// add joistLogic() to functions
function joistLogic() {
  $("input[name=radio-joist]").click(function() {

    var joist = $(this).val();
   
    if (joist == 'Yes') {
      joistQuestion()
      $("#questionE").click(function(){
        $("#answerE").html('Joists are typically constructed from wood, concrete or steel.')
      });
      
      $("#questionF").click(function(){
        $("#answerF").html('This is the height at the point where you could hit your head and is usually measured from the underside of the joist.')
      });
      
      $("#questionG").click(function(){
        $("#answerG").html('The horizontal distance from where you start to walk down the stair to the point where you could hit your head.')
      });
  }

  if (joist == 'No') {
    $('#joistOptions').hide()
    $('.hideJoist').attr("disabled",true);
  }
   
  })
};


// add landing Logic to functions

function landingQuestionY() {
  $('#addLandingYes').html(landingQuestionYes);
}

function landingQuestionN() {
  $('#addLandingNo').html(landingQuestionNo);
}


function landingLogic() {
  $("input[name=radio-landing]").click(function() {

    var landing = $(this).val();
    console.log(landing)
   
    if (landing == 'Yes') {
    landingQuestionY()
     
 
  }

  }
  )
   
};






// Stair Styles

$(".style1").click(function(){
  var straightStair = '<div class="straightStairMeasurements">' +
'<label>You Chose:<input type="text" name="Stair Type" value="' + $(this).attr("name") + '" placeholder="' + $(this).attr("name") +'" readonly /></input></label>' +
'<label>A) Total Height from Floor to Floor <img class="questionMark questionA" src="assets/images/question.svg">' +
    '<div class="answerA answer"></div>' +
    '<input type="text" name="TOTAL-HEIGHT-FROM-FLOOR-TO-FLOOR" value="" placeholder="" />' +
'</label>' +

'<label>B) Total Run of Stair<img class="questionMark questionB" src="assets/images/question.svg">' +
    '<div class="answerB answer"></div>' +
    '<input type="text" name="TOTAL-RUN-OF-STAIR" value="" placeholder="" />' +
'</label>' +

'<label>C) Width of Stair Riser (R.O or O.S.M) <img class="questionMark questionC" src="assets/images/question.svg">' +
    '<div class="answerC answer"></div>' +
    '<input type="text" name="WIDTH-OF-STAIR" value="" placeholder="" />' +
'</label>' +
'</div>'

  showStairForm()
  joistLogic()
  stairLogic()
  $('#landing').hide()
  $('#landing').attr("disabled",true);
  // showStairType()
  $('#addStairMeasurments').html(straightStair);
  $(".questionA").click(function(){
    $(".answerA").html('This is the total height from top of floor to top of floor.')
  });
  $(".questionB").click(function(){
    $(".answerB").html('This is the total length of the stair from where it starts to where you want it to end on the floor below.')
  });
  $(".questionC").click(function(){
    $(".answerC").html('This is the total width of the stair. Please include if the measurement is O.S.M (Outside Stringer Measurement) or R.O. (Rough Opening).')
  });
});





$(".style2").click(function(){

  showStairForm()
  joistLogic()
  stairLogic()
  landingLogic()
  // showStairType()
  $('#addLandingQuestion').html(landingQuestion);
  $(".questionA").click(function(){
    $(".answerA").html('This is the total height from top of floor to top of floor.')
  });
  $(".questionB").click(function(){
    $(".answerB").html('This is the total length of the stair from where it starts to where you want it to end on the floor below.')
  });
  $(".questionC").click(function(){
    $(".answerC").html('This is the total width of the stair. Please include if the measurement is O.S.M (Outside Stringer Measurement) or R.O. (Rough Opening).')
  });
  var stairTypeDiv = $(this)
  console.log($(this).attr("name"))
});

