var http = require('http');
var url = require('url');
var callback = function (request, response) {


    response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });

    var parts = url.parse(request.url);

    if (parts.path == '/') {
        response.end("Site na raiz");

    } else if (parts.path == '/carros') {
        response.end("Voce digitou a rota /carros");
    } else {
        response.end("Rota invalida:" + parts.path)
    }

}
var server = http.createServer(callback);
server.listen(3000);
console.log("Servidor iniciado em http://localhost:3000");