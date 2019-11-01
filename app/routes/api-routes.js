const connection = require("../config/connection.js");
const parseIngredients = require("../config/api.js")

module.exports = function(app) {
    // Adding a recipe
    app.post("/api/new", async function(req, res) {
        console.log("Recipe Data:");
        console.log(req.body);

        const dbQuery = "INSERT INTO recipes(title, ingredients, body) VALUES (?, ?, ?)";
        // const ingredientsRaw = [];
        // ingredientsRaw.push(req.body.ingredients);
        // console.log(ingredientsRaw);
        // const ingredientsJSON = await parseIngredients(ingredientsRaw);

        connection.query(dbQuery, [req.body.title, "1 cup flour", req.body.body], function(err, result) {
            if (err) throw err;
            console.log("Recipe Successfully Saved!");
            res.end();
        });
    });
};