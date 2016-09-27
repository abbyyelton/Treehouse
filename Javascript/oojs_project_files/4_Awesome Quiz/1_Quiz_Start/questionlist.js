function QuestionList() {
  this.question = [];
}

QuestionList.prototype.add = function(question) {
  this.question.push(question);
}

//show question
QuestionList.prototype.nextQuestion = function(number) {
  //display question and answers
  this.question[number].displayQuestion();
  //display question number
  $('#progress').html('Question '+ (number+1) + ' of ' + this.question.length);
}
