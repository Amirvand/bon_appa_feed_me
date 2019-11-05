$(document).ready(function () {
    var searchInput = $("#ingredient-search");

    $(document).on("submit", "#ingredient-form", searchRecipes);

    function searchRecipes(event) {
        event.preventDefault();

        $.get("/api/recipes", function (data) {
        })

        searchInput.val("");
    };
})