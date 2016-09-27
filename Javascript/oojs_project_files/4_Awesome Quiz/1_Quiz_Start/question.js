randomNumber = function() {
  return (Math.floor(Math.random() * 2));
}

function Question(question, incorrectAnswer, correctAnswer) {
  this.question = question;
  this.incorrectAnswer = incorrectAnswer;
  this.correctAnswer = correctAnswer;
  this.correctButton = '';
}

Question.prototype.displayQuestion = function() {
  $('#question').html(this.question);
  //randomize which answer is first
  if (randomNumber() === 0) {
    $('#choice0').html(this.incorrectAnswer);
    $('#choice1').html(this.correctAnswer);
    this.correctButton = 'guess1';
  } else {
    $('#choice1').html(this.incorrectAnswer);
    $('#choice0').html(this.correctAnswer);
    this.correctButton = 'guess0';
  }
}

Question.prototype.checkAnswer = function(button) {
  if ( button === this.correctButton ) {
    return true;
  } else {
    return false;
  }
}
