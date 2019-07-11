var db = require("../models");

module.exports = function(app) {
    app.get("/api/users", function(req,res) {
        db.users.findAll({}).then(function(dbUsers) {
            res.json(dbUsers)
        })
    })
    app.post("/api/users", function(req, res) {
        console.log(req.body)
        
        db.users.create(req.body).then(function(dbUsers) {
            res.json(dbUsers)
        })
    })
}