const axios = require("axios");

function parseIngredients(ingredientsRaw) {
    return axios({
        method: "POST",
        url: "https://zestful.p.rapidapi.com/parseIngredients",
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
        function (results) {
            console.log(results.data)
            return results.data;
        }).catch(function (err) {
            console.log(err);
            throw err;
        })
};

module.exports = parseIngredients;