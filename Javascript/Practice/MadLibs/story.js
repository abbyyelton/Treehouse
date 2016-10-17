function updateQuestions() {
  var questionsLeft = "[" + questions + " question(s) left]";
  questions--;
  return questionsLeft;
}

var questions = 3;
var input = [ {adjective : "test"},
              {noun : ""},
              {verb : ""}];
              console.log(input);

// portion of prompt string with number of questions left
var questionCountString;
// portion of prompt string with question
var questionString;
// final output string
var htmlString = "<h2>"
for ( var i = 0; i < input.length; i++ ) {
  questionCountString = updateQuestions();
  input[i][1] = prompt("Enter a " + input[i][0] + " " + questionCountString);
}
htmlString = "<h2>The quick " + input["adjective"] + " fox " + input["verb"] + " over the lazy " + input["noun"] + ".</h2>";
alert("You're done, view sentence!");
document.write(htmlString);
