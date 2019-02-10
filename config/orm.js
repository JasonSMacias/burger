let connection = require("./connection.js");

let orm = {
  // find all burgers
  selectAll: function(req, res) {
    let queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) {
          console.log(err);
          return res
            .status(500)
            .json(err);
        }
        res.json(result);
    });
  },
  //find burger by id (from req.params.id)
  findById: function(req, res) {
    let queryString = "SELECT * FROM burgers WHERE id = ?";
    connection.query(queryString, [req.params.id], function(err, result) {
      if (err) {
          console.log(err);
          return res
            .status(400)
            .json(err);
        }
        res.json(result[0]);
    });
  },
  // insert / create new burger (req.body via POST)
  createBurger: function(req, res) {
    let queryString =
      "INSERT INTO burgers SET ?";

    connection.query(
      queryString,
      req.body,
      function(err, result) {
        if (err) {
          console.log(err);
          return res
            .status(400)
            .json(err);
        }
        res.json(result);
      }
    );
  },
  // UPDATE/PUT a burger to mark eaten, using req.params.id for where to update
  updateBurger: function(req, res) {
    var queryString = "UPDATE burgers SET eaten = true where id = ?";
    connection.query(queryString, [req.params.id], function(err, result) {
      if (err) {
          console.log(err);
          return res
            .status(400)
            .json(err);
        }
        res.json(result);
      });
  },
  //  delete a burger based on id from req.params.id
  deleteBurger: function(req, res) {
    let queryString =
      "DELETE FROM burgers WHERE id = ?";

    connection.query(queryString, [req.params.id], function(err, result) {
        if (err) {
          console.log(err);
          return res.status(400).json(err);
        }
        res.json(result);
      }
    );
  },
};

module.exports = orm;