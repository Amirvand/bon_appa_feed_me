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