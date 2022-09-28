var http = require("http");
var url = require("url");

var callback = function (request, response) {
  response.writeHead(200, {
    "Content-Type": "application/json; charset=utf-8",
  });

  var parts = url.parse(request.url);

  if (parts.path == "/teste") {
    var pessoa = { nome: "Rosana", sobrenome: "Moreira" };
    var json = JSON.stringify(pessoa);
    response.end(json);
  } else {
    response.end("Rota invalida:" + parts.path);
  }
};
var server = http.createServer(callback);
server.listen(3000);
console.log("Servidor iniciado em http://localhost:3000");
