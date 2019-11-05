module.exports = function(sequelize, DataTypes) {
    var Ingredient = sequelize.define("Ingredient", {
        
        quantity: DataTypes.INTEGER,
        unit: DataTypes.STRING,
        product: DataTypes.STRING

    });
  
    Ingredient.associate = function (models) {
      models.Ingredient.belongsTo(models.Recipe, {
        foreignKey: 'recipeId',
        onDelete: "CASCADE",
      });
    };
  
    return Ingredient;
  };