const express = require("express");
const axios = require("axios");

const app = express();
let PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"));

require("./app/routes/api-routes.js")(app);

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

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
     }).catch(function(err) {
      console.log(err);
      throw err;
    })
};

parseIngredients();