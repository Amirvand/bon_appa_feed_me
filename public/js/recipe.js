$(document).ready(function () {
    var titleInput = $("#recipe-title");
    var bodyInput = $("#recipe-body");
    var ingredientInput = $("#ingredient-body");
    var recipeList = $("tbody");
    var recipeContainer = $(".recipe-container");

    $(document).on("submit", "#recipe-form", handleRecipeFormSubmit);

    getRecipes();

    function handleRecipeFormSubmit(event) {
        event.preventDefault();

        if (!titleInput.val().trim()) {
            return;
        }

        upsertRecipe({
            title: titleInput.val().trim(),
            body: bodyInput.val().trim(),
            ingredient: ingredientInput.val().trim()
        });
    };

    function upsertRecipe(recipeData) {
        $.post("/api/recipes", recipeData)
            .then(getRecipes);
    };

    function createRecipeRow(recipeData) {
        console.log(recipeData);
        var newTr = $("<tr>");
        newTr.data("recipe", recipeData);
        newTr.append("<td>" + recipeData.title + "</td>");
        newTr.append("<td>" + recipeData.body + "</td>");
        newTr.append("<td><a href='/cms?author_id=" + recipeData.id + "'>View Recipe</a></td>");
        return newTr;
    };

    function getRecipes() {
        $.get("/api/recipes", function (data) {
            var rowsToAdd = [];
            for (var i = 0; i < data.length; i++) {
                rowsToAdd.push(createRecipeRow(data[i]));
            }
            renderRecipeList(rowsToAdd);
            titleInput.val("");
            bodyInput.val("");
            ingredientInput.val("");
        });
    };

    function renderRecipeList(rows) {
        recipeList.children().not(":last").remove();
        recipeContainer.children(".alert").remove();
        if (rows.length) {
            console.log(rows);
            recipeList.prepend(rows);
        }
        else {
            renderEmpty();
        }
    };

    function renderEmpty() {
        var alertDiv = $("<div>");
        alertDiv.addClass("alert alert-danger");
        recipeContainer.append(alertDiv);
    };

});