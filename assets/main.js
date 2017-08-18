var examResource = [
  {
    questionDef: "What is the capital of Bangladesh?",
    options: ['Dhaka', 'Sylhet', 'Chittagong'],
    point: 1,
    answer: 'Dhaka'
  },
  {
    questionDef: "What is the capital of India?",
    options: ['Dhaka', 'Chennai', 'Mumbai', 'New Delhi'],
    point: 2,
    answer: 'New Delhi'
  },
  {
    questionDef: "Where is Iceland located?",
    options: ['Europe', 'Asia'],
    point: 0.5,
    answer: 'Europe'
  }
];

// Ready function
$(document).ready(function() {
  generateNewExam(examResource);
  $(".submit-btn").click(examine);
});

// Exam generation function
function generateNewExam(examResource) {
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
  for(var k in examResource) {
    var item = examResource[k];
    if(item.answer === answers[k]) {
      marks+= item.point;
    }
  }
  console.log("Marks: ", marks);
}
