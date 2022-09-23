//Carrega os módulos
const http = require("http");
const url = require("url");
const fs = require("fs");

//Função de Callback para o servidor HTTP
const callback = function (request, response) {
  //Define o cabeçalho (header) com o tipo da resposta + UTF-8 como charset
  response.writeHead(200, {
    "Content-Type": "application/json; charset=utf-8",
  });

  //Faz o parser da URL separando o caminho (rota)
  const parts = url.parse(request.url);
  //lerArquivo(response, 'pokemons.json', parts);

  //Verifica a rota

  switch (parts.path) {
    case "/pokemons":
      fs.readFile("pokemons.json", "utf-8", (err, data) => {
        response.end(data);
      });
      break;

    case "/pokemons/fire":
      fs.readFile("pokemons.json", "utf-8", (err, data) => {
        const pokemonsLista = JSON.parse(data).pokemons;

        for (const pokemon of pokemonsLista) {
          if (pokemon.type === "Fire") {
            response.writeHead(200, {
              "Content-Type": "application/json; charset=utf-8",
            });
            response.write(JSON.stringify(pokemon));
            response.end();
          }
        }
      });
      break;

    case "/pokemons/water":
      fs.readFile("pokemons.json", "utf-8", (err, data) => {
        const pokemonsLista = JSON.parse(data).pokemons;

        for (const pokemon of pokemonsLista) {
          if (pokemon.type === "Water") {
            response.writeHead(200, {
              "Content-Type": "application/json; charset=utf-8",
            });
            response.write(JSON.stringify(pokemon));
            response.end();
          }
        }
      });
      break;

    case "/pokemons/leaf":
      fs.readFile("pokemons.json", "utf-8", (err, data) => {
        const pokemonsLista = JSON.parse(data).pokemons;

        for (const pokemon of pokemonsLista) {
          if (pokemon.type === "Leaf") {
            response.writeHead(200, {
              "Content-Type": "application/json; charset=utf-8",
            });
            response.write(JSON.stringify(pokemon));
            response.end();
          }
        }
      });
      break;

    case "/pokemons/eletric":
      fs.readFile("pokemons.json", "utf-8", (err, data) => {
        const pokemonsLista = JSON.parse(data).pokemons;

        for (const pokemon of pokemonsLista) {
          if (pokemon.type === "Eletric") {
            response.writeHead(200, {
              "Content-Type": "application/json; charset=utf-8",
            });
            response.write(JSON.stringify(pokemon));
            response.end();
          }
        }
      });
      break;
    default:
      response.write(JSON.stringify("Rota Invalida: " + parts.path));
      response.end();
      break;
  }
};

//Servidor HTTP."
const server = http.createServer(callback);
//Porta em que o servidor vai ser ficar escutando
server.listen(3000);
//Mensagem ao iniciar o servidor
console.log("Servidor iniciado em http://localhost:3000/");
