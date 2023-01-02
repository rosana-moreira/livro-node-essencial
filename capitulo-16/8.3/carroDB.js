var mysql = require("mysql2");
let config = require('config');

class carroDB {
  static connect() {
  let dbConfig = config.get("mysqlconfig");
  let connection = mysql.createConnection(dbConfig);
    connection.connect();
    return connection;
  }

  static getCarrosByTipo(modelo, callback) {
    let connection = carroDB.connect();
    let sql = "select id,marca,ano from carro where modelo ='" + modelo + "'";
    let query = connection.query(sql, function (error, results, fields) {
      if (error) {
        throw error;
      }
      callback(results);
    });
    console.log(query.sql);
    connection.end();
  }
  static save(carro, callback) {
    let connection = carroDB.connect();
    let sql = "insert into carro set ? ";
    let query = connection.query(sql, carro, function (error, results, fields) {
      if (error) {
        throw error;
      }
      carro.id = results.insertId;
      callback(carro);
    });
    console.log(query.sql);
    connection.end();
  }
}

module.exports = carroDB;
