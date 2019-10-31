// Function for zestful
function parseIngredients() {
    // API URL
    var queryURL = "https://zestful.p.rapidapi.com/parseIngredients";
    var ingredientsRaw = [
        "½ tsp brown sugar",
        "1 cup whole wheat flour"
    ];

    // Requesting data from webcam.travel API
    $.ajax({
        url: queryURL,
        method: "POST",
        headers: {
            "x-rapidapi-host": "zestful.p.rapidapi.com",
            "x-rapidapi-key": "a1162ee7c6mshc800ab83c077685p1dfbd0jsn121aa30497f1",
            "content-type": "application/json",
            "accept": "application/json"
        },
        data: JSON.stringify({
            "ingredients": ingredientsRaw
        })
    }).then(
        function (response) {
            for (var i = 0; i < response.results.length; i++) {
                console.log(response.results[i].ingredientParsed.product);
            }
        });
};

parseIngredients();

