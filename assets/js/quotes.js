$(window).on('load', (function() {

  $("#quoteForm").hide();
  $("#quoteInfo").hide();
  $('#anotherFile2').hide();
  $('#maximum').hide();
  $('#quoteBackground').hide();
  
  }));






// Standard Form Logic


function stairLogic() {

$("#anotherFile").click(function(){
  var createFile = '<input type="file" name="Upload File-2" id="fileToUpload"></input>'

  $('#addFile').append(createFile);
  $('#anotherFile').hide();
  $('#anotherFile2').show();

})

$("#anotherFile2").click(function(){
  var createFile = '<input type="file" name="Upload File-3" id="fileToUpload"></input>'

  $('#addFile2').append(createFile);
  $('#anotherFile2').hide();
  $('#maximum').show();

})


$("#balustradeButton").click(function(){
  $("#balustrade").slideToggle(1000);

});

$("#fileButton").click(function(){
  $("#file").slideToggle(500);

});

$("#infoButton").click(function(){
  $("#quoteInfo").slideToggle(1000);

});

$("#stairButton").click(function(){
  $("#stairMeasurements").slideToggle(1000);
  $("#quoteInfo").hide('slow');



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
            '<input class="hideJoist" type="text" name="E)JOIST SYSTEM USED" value="" placeholder="" />' +
        '</label>' +

        '<label>F) Height from Underside of Joist to Floor <img class="questionMark" id="questionF" src="assets/images/question.svg">' +
            '<div id="answerF" class="answer"></div>' +
            '<input class="hideJoist converts" type="text" name="F)HEIGHT FROM UNDERSIDE OF JOIST TO FLOOR" value="" placeholder="0 mm" />' +
        '</label>' +

        '<label>G) Length of Stairwell to Headroom <img class="questionMark" id="questionG" src="assets/images/question.svg">' +
            '<div id="answerG" class="answer"></div>' +
            '<input class="hideJoist converts" type="text" name="G)LENGTH FROM UNDERSIDE OF JOIST TO FLOOR" value="" placeholder="0 mm" />' +
        '</label>' +
    '</div>' +
'</div>'

function joistQuestion() {
  $('#addJoistYes').html(joistQuestionYes);
  $(".converts").change(function () {
    $(this).val($(this).val() + ' mm');
  });
  
  $('.converts').keyup(function () { 
  $(this).val($(this).val().replace(/[^0-9\.]/g,''));
  });
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





// Stair Styles

$(".style1stair").click(function(){
  $('#quoteBackground').show();

  var imageModel = '<img class="sticky" id="dimensionsImage"src="/assets/images/Straight-Stairs-With-Walls-Letters (1).png" alt="">'

  $('#addStairModel').html(imageModel)

  var straightStair = '<div class="straightStairMeasurements">' +
'<label>You Chose:<input type="text" name="Stair Type" value="' + $(this).attr("name") + '" placeholder="' + $(this).attr("name") +'" readonly /></input></label>' +
'<label>A) Total Height from Floor to Floor <img class="questionMark questionA" src="assets/images/question.svg">' +
    '<div class="answerA answer"></div>' +
    '<div class="flex">' +
    '<input class="converts" type="text" name="A)TOTAL HEIGHT FROM FLOOR TO FLOOR" value="" placeholder="0 mm" />' +
'</label>' +
'</div>' +

'<label>B) Total Run of Stair <img class="questionMark questionB" src="assets/images/question.svg">' +
    '<div class="answerB answer"></div>' +
    '<input class="converts" type="text" name="B)TOTAL RUN OF STAIR" value="" placeholder="0 mm" />' +
'</label>' +

'<label>C) Width of Stair Riser (R.O or O.S.M) <img class="questionMark questionC" src="assets/images/question.svg">' +
    '<div class="answerC answer"></div>' +
    '<div class="flex">' +
    '<input class="dimension1 converts" type="text" name="C)WIDTH-OF-STAIR (mm)" value="" placeholder="0 mm" />' +
    '<select class="dimension2" name="R.O or O.S.M:">' +
          '<option value="R.O">R.O</option>' +
          '<option value="O.S.M">O.S.M</option>' +
      '</select>' +
      '</div>' +
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
 
    $(".converts").change(function () {
          $(this).val($(this).val() + ' mm');
    });

    $('.converts').keyup(function () { 
      $(this).val($(this).val().replace(/[^0-9\.]/g,''));
  });
   
});





$(".style2, .style3").click(function(){

  showStairForm()
  joistLogic()
  stairLogic()
  $('#quoteHeaderMain').hide();
  $('#step2').hide();

var landingQuestionYes = '<div id="landingYes">' +

'<label>You Chose:<input class="hidelandingY" type="text" name="Stair Type" value="' + $(this).attr("name") + '" placeholder="' + $(this).attr("name") +'" readonly /></input></label>' +

'<label>A1) Total Height from Floor to Floor<img class="questionMark questionA" src="assets/images/question.svg"><div class="answerA answer"></div><input type="text" class="hidelandingY converts" name="A1)TOTAL HEIGHT FROM FLOOR TO FLOOR" value="" placeholder="0 mm" /></label>' +


'<label>A2) Total Height of Bottom Stair<img class="questionMark questionA1" src="assets/images/question.svg"><div class="answer answerA1"></div><input type="text" class="hidelandingY converts" name="A2)TOTAL HEIGHT OF BOTTOM STAIR" value="" placeholder="0 mm" /></label>' +


'<label>B1) Total Run of Top Stair <img class="questionMark questionB" src="assets/images/question.svg"><div class="answerB answer"></div><input type="text" class="hidelandingY converts" name="B1)TOTAL RUN OF TOP STAIR" value="" placeholder="0 mm" /></label>' +

'<label>B2) Total Run of Bottom Stair <img class="questionMark questionB1" src="assets/images/question.svg"><div class="answer answerB1"></div><input type="text" class="hidelandingY converts" name="B2)TOTAL RUN OF BOTTOM STAIR" value="" placeholder="0 mm" /></label>' +

'<label>C1) Width of Bottom Stair (R.O or O.S.M) <img class="questionMark questionC"  src="assets/images/question.svg"><div class="answerC answer"></div><div class="flex"><input class="hidelandingY width1 converts" type="text" name="C1)WIDTH OF BOTTOM STAIR" value="" placeholder="0 mm" />' +
'<select class="width2 hidelandingY" name="C1)R.O or O.S.M:">' +
'<option value="R.O">R.O</option>' +
'<option value="O.S.M">O.S.M</option>' +
'</select>' +
'</div>' + 
'</label>' +

'<label>C2) Width of Top Stair (R.O or O.S.M) <img class="questionMark questionC1" src="assets/images/question.svg"><div class="answerC1 answer"></div><div class="flex"><input class="hidelandingY width1 converts" type="text" name="C2)WIDTH OF TOP STAIR" value="" placeholder="0 mm" />' +
'<select class="width2 hidelandingY" name="C2)R.O or O.S.M:">' +
'<option value="R.O">R.O</option>' +
'<option value="O.S.M">O.S.M</option>' +
'</select>' +
'</div>' + 
'</label>' +

'<label>D) Landing Dimensions <img class="questionMark questionD" src="assets/images/question.svg"><div class="answerD answer"></div><div class="flex"><input class="dimension1 hidelandingY converts" type="text" name="D1)LANDING DIMENSION" value="" placeholder="0 mm" /> By <input class="dimension2 hidelandingY converts" type="text" name="D2)LANDING DIMENSION" value="" placeholder="0 mm" /></div></label>' +

'</div>'

var landingQuestionNo = '<div id="landingNo">' +
'<label>You Chose:<input type="text"class="hidelandingN"  name="Stair Type" value="' + $(this).attr("name") + '" placeholder="' + $(this).attr("name") +'" readonly /></input></label>' +

'<label>A) Total Height from Floor to Floor <img class="questionMark questionA" src="assets/images/question.svg"><div class="answerA answer"></div><input class="hidelandingN converts" type="text" name="A)TOTAL HEIGHT FROM FLOOR TO FLOOR" value="" placeholder="0 mm" /></label>' +


'<label>B) Total Run of Stair <img class="questionMark questionB" src="assets/images/question.svg"><div class="answerB answer" ></div><input type="text" class="hidelandingN converts" name="B)TOTAL RUN OF STAIR" value="" placeholder="0 mm" /></label>' +

'<label>C1) Width of Bottom Stair <img class="questionMark questionC" src="assets/images/question.svg"><div class="answerC answer"></div><div class="flex"><input class="hidelandingN converts" type="text" name="C1)WIDTH OF BOTTOM STAIR" value="" placeholder="0 mm" />' +
'<select class="width2 hidelandingN" name="C2)R.O or O.S.M:">' +
'<option value="R.O">R.O</option>' +
'<option value="O.S.M">O.S.M</option>' +
'</select>' +
'</div>' + 
'</label>' +

'<label>C2) Width of Top Stair <img class="questionMark questionC1" src="assets/images/question.svg"><div class="answerC1 answer"></div><div class="flex"><input class="hidelandingN converts" type="text" name="C2)WIDTH OF TOP STAIR" value="" placeholder="0 mm" />' +
'<select class="width2 hidelandingN" name="C2)R.O or O.S.M:">' +
'<option value="R.O">R.O</option>' +
'<option value="O.S.M">O.S.M</option>' +
'</select>' +
'</div>' + 
'</label>' +

'<label>D) Landing Dimensions <img class="questionMark questionD" src="assets/images/question.svg"><div class="answerD answer"></div><div class="flex"><input class="dimension1 hidelandingN converts" type="text" name="D1)LANDING DIMENSION" value="" placeholder="0 mm" /> By <input type="" class="dimension2 hidelandingN converts" name="D2)LANDING DIMENSION" value="" placeholder="0 mm" /></label></div>' +

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
$(".converts").change(function () {
  $(this).val($(this).val() + ' mm');
});

$('.converts').keyup(function () { 
$(this).val($(this).val().replace(/[^0-9\.]/g,''));
});
});










 
  // landingLogic()
  

});

