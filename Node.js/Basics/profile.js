//Problem: We need a simple way to look at a user's badge count and JS points
//Solution: Use Node.js to connect to Treehouse's API to get profile info to print out

var http = require("https");

//Print out message
function printMessage(username, badgeCount, points, pointsSubject) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in " + pointsSubject + ".";
  console.log(message);
}

//Print out error messages
function printError(error) {
  console.error(error.message);
};

function get(username, pointsSubject) {
  //Connect to treehouse - http://teamtreehouse.com/username/json
  var request = http.get("https://teamtreehouse.com/" + username + ".json", 
    function(response) {
      var body = "";
      //Read the data
      response.on('data', function(chunk) {
        body += chunk;
      });
      response.on('end', function() {
        //Parse the data
        if (response.statusCode === 200) {
          try {
            var profile = JSON.parse(body);
            printMessage( username, profile.badges.length, profile.points[pointsSubject], pointsSubject);
          } catch(error) {
            //Parse error
            printError(error);
          }
        } else {
          //Status Code Error
          printError({message: "There was an error getting the profile for " + username + ". (" + http.STATUS_CODES + ")" });
        }      
      });
  });
  
  //Connection Error
  request.on('error',printError);
}

module.exports.get = get;
