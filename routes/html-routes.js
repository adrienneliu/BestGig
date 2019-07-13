var path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res) {
        console.log("Here")
<<<<<<< HEAD
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })

    app.get("/test", function(req, res) {
        console.log("Here")
        res.sendFile(path.join(__dirname, "../public/test.html"))
=======
        // res.sendFile(path.join(__dirname, "../public/home.html"))
        res.render("home")
>>>>>>> ffcb01c4704aa0214eb6f9e40f21e5cf53445e62
    })
}