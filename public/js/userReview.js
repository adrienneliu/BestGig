// var db = require("../../../models");

$(document).ready(function() {
    var nameInput = $("#name");
    var companyInput = $("#company");
    var ratingInput = $("#rating");
    var payInput = $("#pay");
    var locationInput = $("#location");

    $("#submitReview").on("click", function(event) {
        console.log("Did we get here");
        event.preventDefault();
        var newReview = {
            company_name: companyInput.val().trim(), 
            username: nameInput.val().trim(), 
            pay_per_hour: parseFloat(payInput.val().trim()), 
            rating: parseInt(ratingInput.val().trim(), 10), 
            location: locationInput.val().trim()
        };

        console.log("New Review");
        console.log(newReview);

        //could do something here to query company database and check if one exists with compan
        //information we'd need to do all of this here: we'd need the models,
        // var queriedCompany = db.companies.findAll({
        //     where: {
        //         company_name: newReview.company_name, 
        //         location: newReview.location
        //     }
        // });
        // if(queriedCompany === null) {
        //     db.companies.create({
        //         company_name: newReview.company_name, 
        //         average_rating: newReview.rating, 
        //         average_pay_per_hour: newReview.pay_per_hour, 
        //         number_reviews: 1, 
        //         location: newReview.location
        //     }).then(function (dbCompany) {
        //         res.json(dbCompany)
        //     });
        // }

        // else {
        //     var currentRating = queriedCompany.average_rating;
        //     var currentPay = queriedCompany.average_pay_per_hour;
        //     var currentNumRatings = queriedCompany.number_reviews;
        //     var newNumRatings = currentNumRatings++;
        //     var newPay = (currentPay + newReview.pay_per_hour)/newNumRatings;
        //     var newRating = (currentRating + newReview.rating)/newNumRatings;
        //     db.companies.update({
        //         average_rating: newRating, 
        //         average_pay_per_hour: newPay, 
        //         number_reviews: newNumRatings
        //     }, {
        //         where: {
        //             company_name: newReview.company_name, 
        //             location: newReview.location
        //         }
        //     }).then(function (dbCompany) {
        //         res.json(dbCompany)
        //     })
        // }

        $.ajax({
            method: "PUT",
            url: "/api/companies",
            data: newReview
        })
            .then(function () {
                window.location.href = "/test";
            })

        $.post("/api/reviews", newReview, function() {
            console.log("Sent new Review");
        })
    })
})