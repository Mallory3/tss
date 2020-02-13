$(window).on('load', (function() {

  $("#quoteForm").hide();
  
  }));






// Standard Form Logic


function stairLogic() {


$("#balustradeButton").click(function(){
  $("#balustrade").slideToggle(1000);

});

$("#fileButton").click(function(){
  $("#file").slideToggle(500);

});

$("#stairButton").click(function(){
  $("#stairMeasurements").slideToggle(500);

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

$(".questionD").click(function(){
  $(".answerD").html('The horizontal distance from where you start to walk down the stairs to the point where you could hit your head.')
});



$(".questionE").click(function(){
  $(".answerE").html('Joists are typically constructed from wood, concrete or steel.')
});

$(".questionF").click(function(){
  $(".answerF").html('This is the height at the point where you could hit your head and is usually measured from the underside of the joist.')
});

$(".questionG").click(function(){
  $(".answerG").html('The horizontal distance from where you start to walk down the stair to the point where you could hit your head.')
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


var landingQuestionYes = '<div id="landingYes">' +

'<div id="showThisStairStyle"></div>' +

'<label>A) Total Height of Second Stair Riser <img class="questionMark questionA" src="assets/images/question.svg"><div class="answerA answer"></div><input type="text" name="TOTAL-HEIGHT-FROM-FLOOR-TO-FLOOR" value="" placeholder="" /></label>' +


'<label>A1) Total Height of First Stair Riser <img class="questionMark questionA1" src="assets/images/question.svg"><div class="answer answerA1"></div><input class="hidelandingY" type="text" name="WIDTH-OF-STAIR" value="" placeholder="" /></label>' +


'<label>B) Total Run of Stair <img class="questionMark questionB" src="assets/images/question.svg"><div class="answerB answer"></div><input type="text" class="hidelandingY" name="TOTAL-RUN-OF-STAIR" value="" placeholder="" /></label>' +

'<label>B1) Total Run of First Stair <img class="questionMark questionB1" src="assets/images/question.svg"><div class="answer answerB1"></div><input type="text" class="hidelandingY" name="WIDTH-OF-STAIR" value="" placeholder="" /></label>' +

'<label>C) Width of Bottom Stair Riser <img class="questionMark questionC"  src="assets/images/question.svg"><div class="answerC answer"></div><input class="hidelandingY" type="text" name="WIDTH-OF-STAIR" value="" placeholder="" /></label>' +

'<label>C2) Width of Top Stair Riser <img class="questionMark questionC1" src="assets/images/question.svg"><div class="answerC1 answer"></div><input class="hidelandingY" type="text" name="WIDTH-OF-STAIR" value="" placeholder="" /></label>' +

'<label>D) Landing Dimensions <img class="questionMark questionD" src="assets/images/question.svg"><div class="answerD answer"></div><input type="text" class="hidelandingY" name="WIDTH-OF-STAIR" value="" placeholder="" /> By <input type="text" name="WIDTH-OF-STAIR" value="" placeholder="" /></label>' +

'</div>'

var landingQuestionNo = '<div id="landingNo">' +
'<div id="showThisStairStyle"></div>' +

'<label>A) Total Height from Floor to Floor <img class="questionMark questionA" src="assets/images/question.svg"><div class="answerA answer"></div><input class="hidelandingN" type="text" name="TOTAL-HEIGHT-FROM-FLOOR-TO-FLOOR" value="" placeholder="" /></label>' +


'<label>B) Total Run of Stair <img class="questionMark questionB" src="assets/images/question.svg"><div class="answerB answer" ></div><input type="text" class="hidelandingN" name="TOTAL-RUN-OF-STAIR" value="" placeholder="" /></label>' +

'<label>C) Width of Bottom Stair Riser <img class="questionMark questionC" src="assets/images/question.svg"><div class="answerC answer"></div><input class="hidelandingN" type="text" name="WIDTH-OF-STAIR" value="" placeholder="" /></label>' +

'<label>C2) Width of Top Stair Riser <img class="questionMark questionC1" src="assets/images/question.svg"><div class="answerC1 answer"></div><input class="hidelandingN" type="text" name="WIDTH-OF-STAIR" value="" placeholder="" /></label>' +

'<label>D) Landing Dimensions <img class="questionMark questionD" src="assets/images/question.svg"><div class="answerD answer"></div><input type="text" class="hidelandingN" name="WIDTH-OF-STAIR" value="" placeholder="" /> By <input type="text" name="WIDTH-OF-STAIR" value="" placeholder="" /></label>' +

'</div>'

// See why A B C wont work, rename names, Test!!! Add this.name for style 2..repeat for other styles
// function landingQuestionY() {
//   $('#addLandingYes').html(landingQuestionYes);
// }

// function landingQuestionN() {
//   $('#addLandingNo').html(landingQuestionNo);
// }


// function landingLogic() {
//   $("input[name=radio-landing]").click(function() {

//     var landing = $(this).val();
//     console.log(landing)
   
//     if (landing == 'Yes') {
//     $('#addLandingYes').html(landingQuestionYes);
//     $('#landingNo').hide()
//     $('.hidelandingY').attr("disabled",true);
//     $(".questionA").click(function(){
//       $(".answerA").html('This is the total height from top of floor to top of floor.')
//     });
    
//     $(".questionB").click(function(){
//       $(".answerB").html('This is the total length of the stair from where it starts to where you want it to end on the floor below.')
//     });
    
    
//     $(".questionC").click(function(){
//       $(".answerC").html('This is the total width of the stair. Please include if the measurement is O.S.M (Outside Stringer Measurement) or R.O. (Rough Opening).')
//     });
     
//   }

//   if (landing == 'No') {
//     $('#addLandingNo').html(landingQuestionNo);
//     $('#landingYes').hide()
//     $('.hidelandingN').attr("disabled",true);
//     $(".questionA").click(function(){
//       $(".answerA").html('This is the total height from top of floor to top of floor.')
//     });
    
//     $(".questionB").click(function(){
//       $(".answerB").html('This is the total length of the stair from where it starts to where you want it to end on the floor below.')
//     });
    
    
//     $(".questionC").click(function(){
//       $(".answerC").html('This is the total width of the stair. Please include if the measurement is O.S.M (Outside Stringer Measurement) or R.O. (Rough Opening).')
//     });
//   }
//   }
//   )
// };


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
  $('#quoteHeaderMain').hide();
  $('#step2').hide();
  $('#landing').hide()
  $('#landing').attr("disabled",true);
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





$(".style2, .style3").click(function(){

  showStairForm()
  joistLogic()
  stairLogic()
  $('#quoteHeaderMain').hide();
  $('#step2').hide();

var landingQuestionYes = '<div id="landingYes">' +

'<label>You Chose:<input type="text" name="Stair Type" value="' + $(this).attr("name") + '" placeholder="' + $(this).attr("name") +'" readonly /></input></label>' +

'<label>A) Total Height of Second Stair Riser <img class="questionMark questionA" src="assets/images/question.svg"><div class="answerA answer"></div><input type="text" name="TOTAL-HEIGHT-FROM-FLOOR-TO-FLOOR" value="" placeholder="" /></label>' +


'<label>A1) Total Height of First Stair Riser <img class="questionMark questionA1" src="assets/images/question.svg"><div class="answer answerA1"></div><input class="hidelandingY" type="text" name="WIDTH-OF-STAIR" value="" placeholder="" /></label>' +


'<label>B) Total Run of Stair <img class="questionMark questionB" src="assets/images/question.svg"><div class="answerB answer"></div><input type="text" class="hidelandingY" name="TOTAL-RUN-OF-STAIR" value="" placeholder="" /></label>' +

'<label>B1) Total Run of First Stair <img class="questionMark questionB1" src="assets/images/question.svg"><div class="answer answerB1"></div><input type="text" class="hidelandingY" name="WIDTH-OF-STAIR" value="" placeholder="" /></label>' +

'<label>C) Width of Bottom Stair Riser <img class="questionMark questionC"  src="assets/images/question.svg"><div class="answerC answer"></div><input class="hidelandingY" type="text" name="WIDTH-OF-STAIR" value="" placeholder="" /></label>' +

'<label>C2) Width of Top Stair Riser <img class="questionMark questionC1" src="assets/images/question.svg"><div class="answerC1 answer"></div><input class="hidelandingY" type="text" name="WIDTH-OF-STAIR" value="" placeholder="" /></label>' +

'<label>D) Landing Dimensions <img class="questionMark questionD" src="assets/images/question.svg"><div class="answerD answer"></div><input type="text" class="hidelandingY" name="WIDTH-OF-STAIR" value="" placeholder="" /> By <input type="text" name="WIDTH-OF-STAIR" value="" placeholder="" /></label>' +

'</div>'

var landingQuestionNo = '<div id="landingNo">' +
'<label>You Chose:<input type="text" name="Stair Type" value="' + $(this).attr("name") + '" placeholder="' + $(this).attr("name") +'" readonly /></input></label>' +

'<label>A) Total Height from Floor to Floor <img class="questionMark questionA" src="assets/images/question.svg"><div class="answerA answer"></div><input class="hidelandingN" type="text" name="TOTAL-HEIGHT-FROM-FLOOR-TO-FLOOR" value="" placeholder="" /></label>' +


'<label>B) Total Run of Stair <img class="questionMark questionB" src="assets/images/question.svg"><div class="answerB answer" ></div><input type="text" class="hidelandingN" name="TOTAL-RUN-OF-STAIR" value="" placeholder="" /></label>' +

'<label>C) Width of Bottom Stair Riser <img class="questionMark questionC" src="assets/images/question.svg"><div class="answerC answer"></div><input class="hidelandingN" type="text" name="WIDTH-OF-STAIR" value="" placeholder="" /></label>' +

'<label>C2) Width of Top Stair Riser <img class="questionMark questionC1" src="assets/images/question.svg"><div class="answerC1 answer"></div><input class="hidelandingN" type="text" name="WIDTH-OF-STAIR" value="" placeholder="" /></label>' +

'<label>D) Landing Dimensions <img class="questionMark questionD" src="assets/images/question.svg"><div class="answerD answer"></div><input type="text" class="hidelandingN" name="WIDTH-OF-STAIR" value="" placeholder="" /> By <input type="text" name="WIDTH-OF-STAIR" value="" placeholder="" /></label>' +

'</div>'

$("input[name=radio-landing]").click(function() {

  var landing = $(this).val();
  console.log(landing)
 
  if (landing == 'Yes') {
  $('#addLandingYes').html(landingQuestionYes);
  $('#landingNo').hide()
  $('.hidelandingN').attr("disabled",true);
  $(".questionA").click(function(){
    $(".answerA").html('This is the total height from top of floor to top of floor.')
  });
  
  $(".questionB").click(function(){
    $(".answerB").html('This is the total length of the stair from where it starts to where you want it to end on the floor below.')
  });
  
  
  $(".questionC").click(function(){
    $(".answerC").html('This is the total width of the stair. Please include if the measurement is O.S.M (Outside Stringer Measurement) or R.O. (Rough Opening).')
  });
   
}

if (landing == 'No') {
  $('#addLandingNo').html(landingQuestionNo);
  $('#landingYes').hide()
  $('.hidelandingY').attr("disabled",true);
  $(".questionA").click(function(){
    $(".answerA").html('This is the total height from top of floor to top of floor.')
  });
  
  $(".questionB").click(function(){
    $(".answerB").html('This is the total length of the stair from where it starts to where you want it to end on the floor below.')
  });
  
  
  $(".questionC").click(function(){
    $(".answerC").html('This is the total width of the stair. Please include if the measurement is O.S.M (Outside Stringer Measurement) or R.O. (Rough Opening).')
  });
}
}
)










 
  // landingLogic()
  

});

