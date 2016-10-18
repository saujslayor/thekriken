'use strict';

var http = require('http');

var server = http.createServer(function(request, response) {
    response.writeHead(200, {'Cotnent-Type': "text/plain"});
    response.end("Hello World\n")    
});

server.listen(process.env.PORT || 8000);

console.log("Server running at http://127.0.0.1:8000/");
