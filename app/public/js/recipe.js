/*
$("#recipe-submit").on("click", function (event) {
    event.preventDefault();

    // Make a newRecipe object
    var newRecipe = {
        title: $("#recipe-title").val().trim(),
        ingredients: $("#ingredients-list").val().trim(),
        body: $("#directions-text").val().trim()
    };

    console.log(newRecipe);

    $.post("/api/new", newRecipe)

    $("#recipe-title").val("");
    $("#ingredients-list").val("");
    $("#directions-text").val("");
});
*/

//create list for all recipes
var allRecipes = [];
//these arrays will be pushed to each new recipe and then reset for a new recipe
ingredients = [];
instructions = [];
//add button adds ingredient to ingredient array
$('#addBtn').click(function () {
    var ingredient = $('#recipeIngredient').val();
    ingredients.push(ingredient);
    var newLi = $(`<li>${ingredient}</li>`);
    $('#ingredientList').append(newLi);
    $('#recipeIngredient').val("");

});
//add step button add step to instruction array
$('#addStepBtn').click(function () {
    var instruction = $('#recipeStep').val();
    instructions.push(instruction);
    var newLi = $(`<li>${instruction}</li>`);
    $('#instructionList').append(newLi);
    $('#recipeStep').val("");

});
$('#submitBtn').click(function () {

    //creates object here so when you add more recipes it is not overwritten
    var recipeData = {
        title: [],
        ingredients: [],
        instructions: []
    };
    //add ingredients to recipe object
    recipeData.ingredients = ingredients;
    //add instructions to recipe object
    recipeData.instructions = instructions;
    //adds title to recipe data
    var recipeTitle = $('#recipeName').val();
    //add title to recipe title
    recipeData.title = recipeTitle;
    //document.location.reload()
    //If user doesn't enter title data, it stops and alerts
    if (recipeTitle = null || recipeTitle == "") {
        alert("Please enter valid data!");
    } else {
        allRecipes.push(recipeData);
        console.log(allRecipes);
        //clears input forms
        $('#recipeIngredient').val("");
        $('#recipeName').val("");
        $("#instructionList").empty();
        $("#ingredientList").empty();
        recipeTitle = "";
        ingredients = [];
        instructions = [];
    }
});