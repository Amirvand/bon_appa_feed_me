var path = require("path");

module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // Route to the cms page
    app.get("/recipes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/recipe-manager.html"));
    });

    app.get("/search", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/search.html"));
    });
    // index route loads view.html
    app.get("*", function (req, res) {
        message = "Welcome";
    });
};