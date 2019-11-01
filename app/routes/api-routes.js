const connection = require("../config/connection.js");
const parseIngredients = require("../config/api.js")

module.exports = function(app) {
    // Adding a recipe
    app.post("/api/new", async function(req, res) {
        console.log("Recipe Data:");
        console.log(req.body);

        const dbQuery = "INSERT INTO recipes(title, ingredients, body) VALUES (?, ?, ?)";
        const ingredientsRaw = [];
        ingredientsRaw.push(req.body.ingredients);
        console.log(ingredientsRaw);
        const data = await parseIngredients(ingredientsRaw);

        const query = connection.query(dbQuery, [req.body.title, JSON.stringify(data.results[0].ingredientParsed.product), req.body.body], function(err, result) {
            console.log(query.sql);
            if (err) throw err;
            console.log("Recipe Successfully Saved!");
            res.end();
        });
    });
};