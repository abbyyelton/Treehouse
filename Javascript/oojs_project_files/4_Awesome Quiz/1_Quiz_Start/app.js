var questionList = new QuestionList();

var question1 = new Question( 'What is the Capital of Missouri?', 'St. Louis', 'Jefferson City');
var question2 = new Question( 'What is the Capital of Kansas?', 'Kansas City', 'Topeka');
var question3 = new Question( 'What is the Capital of Kentucky?', 'Louisville', 'Frankfort');
var question4 = new Question( 'What is the Capital of Washington?', 'Seattle', 'Olympia');
var question5 = new Question( 'What is the Capital of South Carolina?', 'Columbus', 'Columbia');
var question6 = new Question( 'What is the Capital of Nevada?', 'Reno', 'Carson City');
var question7 = new Question( 'What is the Capital of New Hampshire?', 'Manchester', 'Concord');
var question8 = new Question( 'What is the Capital of Pennsylvania?', 'Philadelphia', 'Harrisburg');
var question9 = new Question( 'What is the Capital of Louisiana?', 'New Orleans', 'Baton Rouge');
var question10 = new Question( 'What is the Capital of California?', 'Los Angeles', 'Sacramento');

questionList.add(question1);
questionList.add(question2);
questionList.add(question3);
questionList.add(question4);
questionList.add(question5);
questionList.add(question6);
questionList.add(question7);
questionList.add(question8);
questionList.add(question9);
questionList.add(question10);

//start game
var questionNumber = 0;
questionList.nextQuestion(questionNumber);

var correctQuestions = 0;
var totalQuestions = questionList.question.length;

function clickMethod(button) {
  //check for correct answer
  if ( questionList.question[questionNumber].checkAnswer(button.id) ) {
    correctQuestions++;
  }
  //show next question
  questionNumber++;
  if ( questionNumber < totalQuestions ) {
    questionList.nextQuestion(questionNumber);
  } else {
    $('#quiz').html('Congratulations! You got ' + correctQuestions + ' out of ' + totalQuestions +' correct!')
  }
}

var $buttonZero = $('#guess0');
$buttonZero.click( function() {
  clickMethod(this);

}); //end click

var $buttonOne = $('#guess1');
$buttonOne.click( function() {
  clickMethod(this);
}); //end click
