var straightStair = '<div class="straightStairMeasurements">' +
'<label>A) Total Height from Floor to Floor <img class="questionMark" class="questionA" src="assets/images/question.svg">' +
    '<div class="answerA" class="answer"></div>' +
    '<input type="text" name="TOTAL-HEIGHT-FROM-FLOOR-TO-FLOOR" value="" placeholder="" />' +
'</label>' +

'<label>B) Total Run of Stair<img class="questionMark" class="questionB" src="assets/images/question.svg">' +
    '<div class="answerB" class="answer"></div>' +
    '<input type="text" name="TOTAL-RUN-OF-STAIR" value="" placeholder="" />' +
'</label>' +

'<label>C) Width of Stair Riser (R.O or O.S.M) <img class="questionMark" class="questionC" src="assets/images/question.svg">' +
    '<div class="answerC" class="answer"></div>' +
    '<input type="text" name="WIDTH-OF-STAIR" value="" placeholder="" />' +
'</label>' +
'</div>'


var landingQuestion = '<div id="landing">' +            
'<div>' +
'<label>Do You Have a Landing Already in Place? <img class="questionMark" id="questionStringer" src="assets/images/question.svg"></label>' +
'<input type="radio" id="radio-landing-Yes" name="radio-landing" value="Yes">' +
'<label for="radio-landing-Yes" value="Yes">Yes</label>' +

'<input type="radio" id="radio-landing-No" name="radio-landing" value="No">' +
'<label for="radio-landing-No" value="No">No</label>' +
'</div>' +
'</div>'

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

var joistQuestionYes = '<div class="joistYes">' +

    '<div id="joistOptions">' +
        '<label>E) Joist Sytem Used <img class="questionMark" id="questionE" src="assets/images/question.svg">' +
            '<div id="answerE" class="answer"></div>' +
            '<input type="text" name="JOIST-SYSTEM-USED" value="" placeholder="" />' +
        '</label>' +

        '<label>F) Height from Underside of Joist to Floor <img class="questionMark" id="questionF" src="assets/images/question.svg">' +
            '<div id="answerF" class="answer"></div>' +
            '<input type="text" name="HEIGHT-FROM-UNDERSIDE-OF-JOIST-TO-FLOOR" value="" placeholder="" />' +
        '</label>' +

        '<label>F) Length of Stairwell to Headroom <img class="questionMark" id="questionG" src="assets/images/question.svg">' +
            '<div id="answerG" class="answer"></div>' +
            '<input type="text" name="LENGTH-FROM-UNDERSIDE-OF-JOIST-TO-FLOOR" value="" placeholder="" />' +
        '</label>' +
    '</div>' +
'</div>'