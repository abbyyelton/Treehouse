function randomNumber(min, max) {
  if ( isNaN(min) || isNaN(max) ) {
    throw new Error('Please enter 2 valid numbers');
  } else {
    var number = Math.floor( Math.random() * (max-min +1) ) + min;
    return number;
    }
}

var secretNumber = randomNumber(1,10);
var correctGuess = false;

var guess = parseInt(prompt( "I'm thinking of a number between 1 and 10. What is it?"));

if ( guess === secretNumber ) {
  //guess was correct
  correctGuess = true;
} else if ( guess > secretNumber ) {
  //guess was too high, give one more chance
  guess = parseInt(prompt( "The number is less than " + guess + ". Try again!"));
  if ( guess === secretNumber ) {
    correctGuess = true;
  }
} else if ( guess < secretNumber ) {
  //guess was too low, give one more chance
  guess = parseInt(prompt( "The number is greater than " + guess + ". Try again!"));
  if ( guess === secretNumber ) {
    correctGuess = true;
  }
}

if ( correctGuess ) {
  document.write("<h2>Congratulations, you guessed the number!</h2>");
} else {
  document.write("<h2>Sorry, you didn't guess the number. It was " + secretNumber + ".</h2>");
}
