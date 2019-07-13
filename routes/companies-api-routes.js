var db = require("../models")

module.exports = function(app) {
    // Here we can find all the info from the model companies
    app.get("/api/companies", function(req,res) {
        db.companies.findAll({}).then(function(dbCompanies) {
            res.json(dbCompanies)
        })
    });

    app.put("/api/companies", function (req, res) {
        console.log(req.body)
        db.companies.findAll({
            where: {
                company_name: req.body.company_name, 
                location: req.body.location
            }
        }).then(function(queriedCompany) {
            console.log("Queried Company");
            console.log(queriedCompany);
            if(queriedCompany.length === 0) {
                db.companies.create({
                    company_name: req.body.company_name, 
                    average_rating: req.body.rating, 
                    average_pay_per_hour: req.body.pay_per_hour, 
                    number_reviews: 1, 
                    location: req.body.location
                }).then(function (dbCompany) {
                    console.log("Created company");
                    console.log(dbCompany);
                    res.json(dbCompany)
                });
            }
    
            else {
                var queriedCompany2 = queriedCompany[0].dataValues;
                // console.log("Queried Company 2");
                // console.log(queriedCompany2.dataValues);
                var currentRating = queriedCompany2.average_rating;
                console.log("Current Average Rating");
                console.log(currentRating);
                var currentPay = queriedCompany2.average_pay_per_hour;
                console.log("Current Pay");
                console.log(currentPay);
                var currentNumRatings = queriedCompany2.number_reviews;
                console.log("current num");
                console.log(currentNumRatings);
                var newNumRatings = currentNumRatings + 1;
                console.log("new Num");
                console.log(newNumRatings);
                var newPay = (currentPay + parseFloat(req.body.pay_per_hour))/newNumRatings;
                console.log("New pay");
                console.log(newPay);
                var newRating = (currentRating + parseInt(req.body.rating))/newNumRatings;
                console.log("New Rating");
                console.log(newRating);
                db.companies.update({
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
        // console.log("Queried Company");
        // console.log(queriedCompany);
    //     if(queriedCompany === null) {
    //         db.companies.create({
    //             company_name: req.body.company_name, 
    //             average_rating: req.body.rating, 
    //             average_pay_per_hour: req.body.pay_per_hour, 
    //             number_reviews: 1, 
    //             location: req.body.location
    //         }).then(function (dbCompany) {
    //             res.json(dbCompany)
    //         });
    //     }

    //     else {
    //         var currentRating = queriedCompany.average_rating;
    //         var currentPay = queriedCompany.average_pay_per_hour;
    //         var currentNumRatings = queriedCompany.number_reviews;
    //         var newNumRatings = currentNumRatings++;
    //         var newPay = (currentPay + req.body.pay_per_hour)/newNumRatings;
    //         var newRating = (currentRating + req.body.rating)/newNumRatings;
    //         db.companies.update({
    //             average_rating: newRating, 
    //             average_pay_per_hour: newPay, 
    //             number_reviews: newNumRatings
    //         }, {
    //             where: {
    //                 company_name: req.body.company_name, 
    //                 location: req.body.location
    //             }
    //         }).then(function (dbCompany) {
    //             res.json(dbCompany)
    //         })
    //     }
    // })

    app.post("/api/companies", function(req, res) {
        db.companies.create(req.body).then(function(dbCompanies) {
            res.json(dbCompanies)
        })
    })
}