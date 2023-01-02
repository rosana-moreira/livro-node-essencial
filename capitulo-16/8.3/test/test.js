const carroDB = require("../carroDB");
let assert = require("asserts");

describe("CarroDB", function () {
  it("Teste de busca de carros", async function () {
    let carros = await carroDB.getCarrosByTipo();
    assert.ok(carros.length > 0);
  });
});
describe("#save()", function () {
  it("Teste para salvar um carro", async function () {
    let carro = { nome: "Teste", tipo: "classico" };
    let c = await carroDB.save(carro);
    let id = c.id;
    assert.ok(id > 0);
  });
});
