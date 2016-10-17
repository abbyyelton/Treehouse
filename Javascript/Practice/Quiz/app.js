
var questions = [ {question: "What's the capital of Kentucky?", answer: "frankfort"},
                  {question: "What's the capital of California?", answer: "sacramento"},
                  {question: "What's the capital of Indiana?", answer: "indianapolis"},
                  {question: "What's the capital of North Dakota?", answer: "bismarck"},
                  {question: "What's the capital of Montana?", answer: "helena"}];

var userAnswer;
var correctAnswers = 0;

for ( var i = 0; i < questions.length; i++ ) {
  userAnswer = prompt( questions[i].question );
  if (userAnswer.toLowerCase() === questions[i].answer) {
    correctAnswers++;
  }
}

document.write("<h2>You got " + correctAnswers + " right.");
