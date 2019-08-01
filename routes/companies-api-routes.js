const express = require("express");
const router = express.Router();

// All of the data retrieved in this route is from the companies model in the bestGigs_db
var Companies = require("../models/Companies")

router.put("/api/companies", function (req, res) {
    console.log("THIS IS WORKING")
    console.log(req.body)
    Companies.findAll({ company_name: req.body.company_name, location: req.body.location })
        .then(company => {
            if (company.length === 0) {
                Companies.insert({
                    company_name: req.body.company_name,
                    average_rating : req.body.rating,
                    average_pay_per_hour : req.body.pay_per_hour,
                    number_reviews : 1,
                    location: req.body.location
                }).then(function (company) {
                    res.json(company)
                })
            } else {
                console.log(company)
                var companyExist = company[0].dataValues
                var currentRating = companyExist.average_rating;
                console.log("Current Average Rating");
                console.log(currentRating);
                var currentPay = companyExist.average_pay_per_hour;
                console.log("Current Pay");
                console.log(currentPay);
                var currentNumRatings = companyExist.number_reviews;
                console.log("current num");
                console.log(currentNumRatings);
                var newNumRatings = currentNumRatings + 1;
                console.log("new Num");
                console.log(newNumRatings);
                var newPay = ((currentPay * currentNumRatings) + parseFloat(req.body.pay_per_hour)) / newNumRatings;
                console.log("What the math should be");
                console.log((12.5 + 20) / 3);
                console.log("Newly Submitted Pay Amount: " + parseFloat(req.body.pay_per_hour));
                console.log("New pay");
                console.log(newPay);
                var newRating = ((currentRating * currentNumRatings) + parseInt(req.body.rating)) / newNumRatings;
                console.log("What the math should be");
                console.log((3.5 + 1) / 3);
                console.log("Newly Submitted Review: " + parseInt(req.body.rating));
                console.log("New Rating");
                console.log(newRating);

                Companies.update({
                    average_rating: newRating,
                    average_pay_per_hour: newPay,
                    number_reviews: newNumRatings
                }, {
                        where: {
                            company_name: req.body.company_name,
                            location: req.body.location
                        }
                    }).then(function (dbCompany) {
                        res.json(dbCompany)
                    })
            }
        })
})

// app.put("/api/companies", function (req, res) {

//     // We will look specifically where the company name is equal to the request body's company name and where the request body's location
//     db.companies.findAll({
//         where: {
//             company_name: req.body.company_name,
//             location: req.body.location
//         }
//         // After we get the specific company lets use it
//     }).then(function (queriedCompany) {

//         // If the company searched does not exist, we will create a new entry
//         if (queriedCompany.length === 0) {
//             db.companies.create({
//                 company_name: req.body.company_name,
//                 average_rating: req.body.rating,
//                 average_pay_per_hour: req.body.pay_per_hour,
//                 number_reviews: 1,
//                 location: req.body.location
//             }).then(function (dbCompany) {
//                 res.json(dbCompany)
//             });

//         } else {
//             var companyExist = queriedCompany[0].dataValues;
//             // console.log("Queried Company 2");
//             // console.log(companyExist.dataValues);
//             var currentRating = companyExist.average_rating;
//             console.log("Current Average Rating");
//             console.log(currentRating);
//             var currentPay = companyExist.average_pay_per_hour;
//             console.log("Current Pay");
//             console.log(currentPay);
//             var currentNumRatings = companyExist.number_reviews;
//             console.log("current num");
//             console.log(currentNumRatings);
//             var newNumRatings = currentNumRatings + 1;
//             console.log("new Num");
//             console.log(newNumRatings);
//             var newPay = ((currentPay * currentNumRatings) + parseFloat(req.body.pay_per_hour)) / newNumRatings;
//             console.log("What the math should be");
//             console.log((12.5 + 20) / 3);
//             console.log("Newly Submitted Pay Amount: " + parseFloat(req.body.pay_per_hour));
//             console.log("New pay");
//             console.log(newPay);
//             var newRating = ((currentRating * currentNumRatings) + parseInt(req.body.rating)) / newNumRatings;
//             console.log("What the math should be");
//             console.log((3.5 + 1) / 3);
//             console.log("Newly Submitted Review: " + parseInt(req.body.rating));
//             console.log("New Rating");
//             console.log(newRating);

//             // Here the companies model is updated with the new data
//             db.companies.update({
//                 average_rating: newRating,
//                 average_pay_per_hour: newPay,
//                 number_reviews: newNumRatings
//             }, {
//                     where: {
//                         company_name: req.body.company_name,
//                         location: req.body.location
//                     }
//                 }).then(function (dbCompany) {
//                     res.json(dbCompany)
//                 })
//         }
//     })
// })

router.post("/api/companies", function (req, res) {
    const { company, rating, pay } = req.body
})

module.exports = router;

// module.exports = function (app) {

//     // This returns all of the company entries
//     app.get("/api/companies", function (req, res) {
//         db.companies.findAll({}).then(function (dbCompanies) {
//             res.json(dbCompanies)
//         })
//     });

//     app.get("/api/companies/:location", function(req, res) {
//         var location = req.params.location.replace("-", " ")
//         db.companies.findAll({
//             where: {
//                 location: location
//             }
//         }).then(function(dbCompanies) {
//             res.json(dbCompanies)
//         })
//     })

//     app.get("/api/companies/cname/:name", function(req, res) {
//         console.log("We got to the point where the companies were queried based on name");
//         // console.log("Company Name");
//         // console.log(req.params.company_name);
//         console.log("Req Params");
//         console.log(req.params);
//         var name = req.params.name;
//         db.companies.findAll({
//             where: {
//                 company_name: name
//             }
//         }).then(function(dbCompanies) {
//             res.json(dbCompanies);
//         })
//     })

//     // This will route will updata the companies model with data from the req.body


            // If the company searched already exists in our database, go here where we will update the company entry with the req.body data.

            // i.e. user submits a 3 star rating Uber in San Francisco that has an avg rating of 4.5. Depending on how many ratings Uber in SF already has, it should bring the rating down by a certain amount


//     // Whenever a new company is entered, their info from the request body will be used to create an entry for them in the database
//     app.post("/api/companies", function (req, res) {
//         db.companies.create(req.body).then(function (dbCompanies) {
//             res.json(dbCompanies)
//         })
//     })
// }