var Profile = require("./profile.js");
var renderer = require("./renderer.js");
var querystring = require("querystring");

var commonHeader = {'Content-Type': 'text/html'};

function homeRoute(request, response) {
  //if url === '/' && GET
  if (request.url === '/') {
    if (request.method.toLowerCase() === "get" ) {
      //show search
      response.writeHead(200, commonHeader);
      renderer.view("header", {}, response);
      renderer.view("search", {}, response);
      renderer.view("footer", {}, response);
      response.end();
    } else {
      //if url === '/' && POST
      //get the post data from body
      request.on("data", function(postBody) {
        //extract the username 
        var query = querystring.parse(postBody.toString());
        //redirect to /:username
        response.writeHead(303, {"Location": "/" + query.username});
        response.end();              
      });
    }
  }
  
}

//Handle HTTP route GET /:username i.e. abbyyelton
function userRoute(request, response) {
  var username = request.url.replace('/','');
  if (username.length > 0) {
    response.writeHead(200, commonHeader);
    renderer.view("header", {}, response);
    //get json from treehouse
    var studentProfile = new Profile(username);
    studentProfile.on("end", function(profileJSON) {
      //Show profile
      //Store values we need
      var values = {
        avatarUrl: profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javaScript: profileJSON.points.JavaScript
      }
      //Simple response
      renderer.view("profile", values, response);
      renderer.view("footer", {}, response);
      response.end();
    });
    studentProfile.on("error", function(error) {
      //show error
      renderer.view("error", {errorMessage: error.message}, response);
      renderer.view("search", {}, response);
      renderer.view("footer", {}, response);
      response.end();
    });
  }
}

module.exports.home = homeRoute;
module.exports.user = userRoute;