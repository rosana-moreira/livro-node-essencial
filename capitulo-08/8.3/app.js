var http = require("http");
var url = require("url");
const CarroBD = require("./carroDB");

function getCarros(response, tipo) {
  CarroBD.getCarrosByTipo(tipo, function (carros) {
    var json = JSON.stringify(carros);
    response.end(json);
  });
}
  function salvarCarro(response, carro) {
    CarroBD.save(carro, function (carro) {
      console.log("Carro salvo com sucesso:" + carro.id);
      var json = JSON.stringify(carro);
      response.end(json);
    });
  }

function callback(request, response) {
  var parts = url.parse(request.url);
  var path = parts.path;
  response.writeHead(200, {
    "Content-Type": "application/json; charset=utf-8",
  });

  if (request.method == "POST") {
    var body = "";
    request.on("data", function (data) {
      body += data;
    });

    request.on("end", function () {
      console.log("POST body:" + body);
      let carro = JSON.parse(body);
      salvarCarro(response, carro);
    });
    return;
  }

  if (request.method == "GET") {
    if (path == "/carros/classicos") {
      getCarros(response, "classicos");
    } else if (path == "/carros/esportivos") {
      getCarros(response, "esportivos");
    } else if (path == "/carros/luxo") {
      getCarros(response, "luxo");
    } else {
      response.end("Not found:" + path);
    }

  }
 
}
var server = http.createServer(callback);
server.listen(3000);
console.log("servidor iniciado em http://localhost:3000/");
