const connection = require("../config/connection.js");

module.exports = function(app) {
    // Adding a recipe
    app.post("/api/new", function(req, res) {
        console.log("Recipe Data:");
        console.log(req.body);

        var dbQuery = "INSERT INTO recipes(title, ingredients, body) VALUES (?, ?, ?)";

        connection.query(dbQuery, [req.body.title, req.body.ingredients, req.body.body], function(err, result) {
            if (err) throw err;
            console.log("Recipe Successfully Saved!");
            res.end();
        });
    });
};