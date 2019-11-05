var db = require("../models");
var parseIngredients = require("../public/js/zestful");

module.exports = function (app) {
  app.get("/api/recipes", function (req, res) {
    db.Recipe.findAll({}).then(function (dbRecipe) {
      res.json(dbRecipe);
    }).then(function (req, res) {
      db.Ingredient.findAll({}).then(function (dbIngredient) {
        res.json(dbIngredient);
      });
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
    });
  });
  app.get("/api/ingredients", function (req, res) {
    
    db.Ingredient.findAll({}).then(ingredient => res.json(ingredient));
  });
 
  app.get("/api/ingredients/:id", function (req, res) {
    
    db.Ingredient.findAll({
      where: {
        id: req.params.recipeId
      }
    }).then(post => res.json(post));
  });
};