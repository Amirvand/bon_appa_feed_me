var db = require("../models");
var parseIngredients = require("../public/js/zestful");

module.exports = function (app) {
  app.get("/api/recipes", function (req, res) {
    db.Recipe.findAll({}).then(function (dbRecipe) {
      res.json(dbRecipe);
    });
  });

  app.post("/api/recipes", function (req, res) {
    db.Recipe.create(req.body).then(async function (dbRecipe) {
      var ingredients = req.body.ingredient;
      var ingredientsArr = ingredients.split(',');
      var data = await parseIngredients(ingredientsArr);
      console.log(data);
      for (var i = 0; i < data.results.length; i++) {
        db.Ingredient.create({
          quantity: JSON.stringify(data.results[i].ingredientParsed.quantity),
          unit: JSON.stringify(data.results[i].ingredientParsed.unit),
          product: JSON.stringify(data.results[i].ingredientParsed.product),
          recipeId: dbRecipe.id
        });
      };
      res.json(dbRecipe);
      console.log(dbIngredient)
    });
  });
};