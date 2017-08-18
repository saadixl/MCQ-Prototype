var examResource = [
  {
    questionDef: "What is the capital of Bangladesh?",
    options: ['Dhaka', 'Sylhet', 'Comilla', 'Chittagong'],
    weight: 2,
    answerIndex: 0
  },
  {
    questionDef: "What is the capital of India?",
    options: ['Dhaka', 'Chennai', 'Mumbai', 'New Delhi'],
    weight: 2,
    answerIndex: 3
  },
  {
    questionDef: "Where is Iceland located?",
    options: ['Europe', 'Asia'],
    weight: 0.5,
    answerIndex: 0
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
      answerOptions+= "<div class='radio'><label><input type='radio' name='optradio'>"+optionItem+"</label></div>";
    }
    $(".mcq-exam-arena").append("<div class='question-block'><div class='question-definition'>"+item.questionDef+"</div><div class='answer-options'>"+answerOptions+"</div></div>");
  }
}

// Examine function
function examine() {
  alert("YO");
}
