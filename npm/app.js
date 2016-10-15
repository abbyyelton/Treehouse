var bcrypt = require('bcrypt');
var colors = require('colors');
var unsecurePlainTextPassword = 'mypassword';
var securePassword = '';

bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(unsecurePlainTextPassword, salt, function(err, hash) {
      securePassword = hash.green;
      console.log(securePassword);
    });
});
//need to wait to call until genSalt is done.

bcrypt.compare(unsecurePlainTextPassword, securePassword, function(err, res) {
    // res == true
    if (res) {
      console.log('Passwords match');
    } else {
      console.log('Passwords do not match');
      console.log(unsecurePlainTextPassword);
      console.log(securePassword);
    }
});
