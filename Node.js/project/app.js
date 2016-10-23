var router = require('./router.js');

//Create a web server
const http = require('http');


//const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function(request, response) {
  router.home(request, response); 
  router.user(request, response); 
});

server.listen(port); 
console.log(`Server running at http:workspace`);
