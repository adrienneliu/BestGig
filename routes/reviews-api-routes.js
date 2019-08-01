const express = require('express');
const router = express.Router();

var Reviews = require("../models/Reviews");
var Companies = require("../models/Companies")

router.post("/api/reviews", function(req, res) {
    const { company, rating, pay} = req.body

    Companies.findAll({ company_name: company })
        .then(company => {
            console.log(company)
            if (company.length != 0) {
                
            }
        })
    Reviews.create({ company_name: company, rating: rating, pay: pay})
        .then(review => {
            console.log(review)
            res.json(review)
        })
});

module.exports = router;

// All of the data collected here will be from the reviews table of the bestGigs_db schema

// module.exports = function (app) {

//     // This returns back all the reviews
//     app.get("/api/reviews", function(req, res) {
//         db.reviews.findAll({}).then(
//             function(dbReviews) {
//                 res.json(dbReviews)
//             }
//         )
//     })

//     // This will get all the data for companies at a specific location e.g. /api/reviews/oakland    
//     app.get("/api/reviews/:location", function (req, res) {
//         var location = req.params.location.replace("-", " ")
//         db.reviews.findAll({
//             where: {
//                 location: location,
//             }
//         }).then(function (dbReviews) {
//             // After we get data back, lets send it back in a package!
//             res.json(dbReviews);
//         });

//     });

//     // User can add a new review to the database through here
//     app.post("/api/reviews", function (req, res) {
//         db.reviews.create(req.body).then(function (dbReviews) {
//             res.json(dbReviews);
//         });
//     });

// }

