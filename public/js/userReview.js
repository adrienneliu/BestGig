// This file is used to submit a new entry into the reviews model and update/create in the companies model

$(document).ready(function () {

    // Grab all of our info

    $("#submitReview").on("click", function (event) {
        event.preventDefault();

        var companyInput = $("#company").val().trim().toLowerCase();
        var payInput = $("#pay").val().trim();
        var ratingInput = $("#rating").val().trim();
        var locationInput = $("#location").val().trim();

        // Put our info in the package newReview
        var newReview = {
            company_name: companyInput,
            pay_per_hour: parseFloat(payInput),
            rating: parseInt(ratingInput, 10),
            location: locationInput
        };

        console.log("New Review");
        console.log(newReview);

        // Here we use a PUT at the route /api/companies with the data package newReview. Now you should check the companies-api-routes.js for the /api/companies route with the method PUT!
        $.ajax({
            method: "PUT",
            url: "/api/companies",
            data: newReview
        })
            // Once the promise has been fulfilled, now we will reload the test route
            .then(function () {
                console.log("It worked!")
            })

        // Here we will send in a new review to the route /api/reviews in the form of a data package
        $.post("/api/reviews", newReview, function () {
            console.log("Sent new Review");
        })
    })
})