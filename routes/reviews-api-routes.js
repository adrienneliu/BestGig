var db = require("../models");

module.exports = function (app) {

    // This will get all the data for companies at this location
    app.get("/api/reviews/:location", function (req, res) {
        var location = req.params.location.replace("-", " ")
        if (location) {
            db.reviews.findAll({
                where: {
                    location: location,
                }
            }).then(function (dbReviews) {
                // After we get data back, lets send it back in a package!
                res.json(dbReviews);
            });
        } 

        // if no location was given, we will go here instead 
        else {
            db.reviews.findAll({}).then(function(dbReviews) {
                return res.json(dbReviews)
            })
        }

    });

    // This will get all the reviews for the company Uber in San Francisco

    // User can add a new review to the database through here
    app.post("/api/reviews", function (req, res) {
        db.reviews.create(req.body).then(function (dbReviews) {
            res.json(dbReviews);
        });
    });

}

