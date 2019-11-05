var path = require("path");

module.exports = function (app) {

    app.get("/recipes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/recipe-manager.html"));
    });

    app.get("/search", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/search.html"));
    });

    app.get("*", function (req, res) {
        message = "Welcome";
    });
};