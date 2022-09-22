var http = require('http');
var server = http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });

    response.end("Hello node!");


})
server.listen(3000);
console.log("Servidor iniciado em http://localhost:3000/");