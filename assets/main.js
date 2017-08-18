var examResource = [];

// Ready function
$(document).ready(function() {
  generate();
  $(".submit-btn").click(examine);
  $(".generate-btn").click(generate);
});

function generate() {
  var textAreaVal = $(".exam-textarea").val();
  examResource = JSON.parse(textAreaVal);
  generateNewExam(examResource);
}

// Exam generation function
function generateNewExam(examResource) {
  $(".mcq-exam-arena").empty();
  $(".result").empty();
  for(var i in examResource) {
    var item = examResource[i];
    var answerOptions = "";
    for(var j in item.options) {
      var optionItem = item.options[j];
      answerOptions+= "<div class='radio'><label><input type='radio' name='optradio"+i+"' value='"+optionItem+"'>"+optionItem+"</label></div>";
    }
    $(".mcq-exam-arena").append("<div class='question-block'><div class='question-definition'>"+item.questionDef+"</div><div class='answer-options'>"+answerOptions+"</div></div>");
  }
}

// Examine function
function examine() {
  var answers = [];
  $(".mcq-exam-arena .question-block").each(function() {
    var chosenAnswer = $(this).find(".answer-options input[type='radio']:checked").val();
    answers.push(chosenAnswer);
  });
  match(answers);
}

// Match function
function match(answers) {
  var marks = 0;
  var correctCount = 0;
  var totalMarks = 0;
  for(var k in examResource) {
    var item = examResource[k];
    if(item.answer === answers[k]) {
      correctCount++;
      marks+= item.point;
    }
    totalMarks+= item.point;
  }
  var resultString = "You have got "+marks+" out of "+totalMarks+". You answered "+correctCount+" out of "+examResource.length+" questions. And your percentile is "+Math.round(marks/totalMarks*100)+"%";
  $(".result").text(resultString);
}
