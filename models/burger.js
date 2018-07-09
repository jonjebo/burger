var connection = require("./../config/connection.js");

var burger = {
    all: function(cb) {
        var queryString = "SELECT * FROM burgers;"
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
};

module.exports = burger;