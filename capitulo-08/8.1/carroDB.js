var mysql = require("mysql2");

class carroDB {
  static connect() {
    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "123456789",
      database: "carros",
    });
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
}

module.exports =carroDB;
