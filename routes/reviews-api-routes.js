var db = require("../models");

module.exports = function (app) {
    app.get("/api/reviews", function (req, res) {
        db.reviews.findAll({}).then(function (dbReviews) {
            res.json(dbReviews);
        });
    });



app.post("/api/reviews", function (req, res) {
    db.reviews.create(req.body).then(function (dbReviews) {
        res.json(dbReviews);
    });
});

}

