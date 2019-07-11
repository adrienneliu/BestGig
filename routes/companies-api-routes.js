var db = require("../models")

module.exports = function(app) {
    app.get("/api/companies", function(req,res) {
        db.companies.findAll({}).then(function(dbCompanies) {
            res.json(dbCompanies)
        })
    });

    app.post("/api/companies", function(req, res) {
        db.companies.create(req.body).then(function(dbCompanies) {
            res.json(dbCompanies)
        })
    })
}