//Usage: Node.js app.js pointsSubject user1 user2 user3...

var profile = require("./profile.js");
var pointsSubject = process.argv[2];
var users = process.argv.slice(3);
users.forEach( function(user) {
  profile.get(user,pointsSubject);
});



