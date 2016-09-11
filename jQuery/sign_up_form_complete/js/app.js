//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times
$password = $("#password");
$confirmPassword = $("#confirm_password");
$username = $("#username");

function validPassword() {
  return $password.val().length > 8;
}

function passwordsMatch() {
  return $confirmPassword.val() === $password.val();
}

function usernamePresent() {
  return $username.val().length > 0;
}

function canSubmit() {
  return validPassword() && passwordsMatch() && usernamePresent();
}

function passwordEvent() {
  if (validPassword()) {
    //If password valid, show hint
    $password.next().hide();
  } else {
    //Else, hide hint
    $password.next().show();
  }
}

function confirmPasswordEvent() {
  if (passwordsMatch()) {
    //If passwords match, hide hint
    $confirmPassword.next().hide();
  } else {
    //Else, show hint
    $confirmPassword.next().show();
  }
}

function enableSubmitEvent() {
  $("#submit").prop("disabled", !canSubmit());
}

//Hide hints
$("form span").hide();

//Check username is present
$username.keyup(enableSubmitEvent);

//Check password length
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

//Check to see if passwords match
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();
