module.exports = function (sequelize, DataTypes) {
    var Recipe = sequelize.define("Recipe", {
        
        title: DataTypes.STRING,
        body: DataTypes.TEXT

    });
    Recipe.associate = function (models) {
        models.Recipe.hasMany(models.Ingredient, {
            foreignKey: 'recipeId',
            as: 'Ingredients'
        });
    };
    return Recipe;
};