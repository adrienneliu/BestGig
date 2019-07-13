
$(document).ready(function () {

    // Feel free to change the info here! The get is used to grab info from the sql database and post the info on the test.html page.
    $("#search-btn").on("click", function () {
        // Grab text from location input
        var location = $("#location-search").val().trim()
        location = location.replace(/\s+/g, "-").toLowerCase();

        // Perform a get from reviews based on the location input
        $.get("/api/reviews/" + location).then(function (data) {
            reviews = data

            // Now that we have all the reviews for companies at this location, we now want to have a list of all the companies
            var companies = []
            for (var j = 0; j < reviews.length; j++) {
                if (!companies.includes(reviews[j].company_name)) {
                    companies.push(reviews[j].company_name)
                }
            }

            // For each company at this location, we will take the sum of its ratings and pay, divide it by its length, and console log the average rating and average pay for the company
            var companyInfo = []
            console.log(location)
            for (var k = 0; k < companies.length; k++) {
                var company = companies[k]
                var ratingSum = 0
                var paySum = 0
                var length = 0
                for(var l = 0; l < reviews.length; l++) {
                    if(reviews[l].company_name === companies[k]) {
                        ratingSum += parseInt(reviews[l].rating) 
                        paySum += reviews[l].pay_per_hour
                        length++
                    }
                }
                var avgRating = (ratingSum/length).toFixed(2)
                var avgPayPerHour = (paySum/length).toFixed(2)
                console.log(company, "average rating:", avgRating)
                console.log(company, "average pay per hour:", avgPayPerHour)
                var companyAndSum = [company, avgRating, avgPayPerHour]
                companyInfo.push(companyAndSum)
            }

            // Now we want to sort the companies by whoever has the highest rating!
            console.log("Pre-Sort:",companyInfo)
            companyInfo.sort()
            console.log("Post-Sort:",companyInfo)

            $("#comp-name1").text(companyInfo[0][0])
            $("#comp-avg-rating1").text(companyInfo[0][1])

            $("#comp-name2").text(companyInfo[1][0])
            $("#comp-avg-rating2").text(companyInfo[1][1])
        })
    })


    // Here we look at the route /api/companies to find data for companies
    // $.get("/api/companies", function (data) {
    //     companies = data;
    //     console.log(companies)
    //     if (data) {
    //         company = companies[0]
    //         companyName = company.company_name.toString()
    //         companyRating = company.average_rating.toString()
    //         companyPay = company.average_pay_per_hour.toString()
    //         companyReviews = company.number_reviews.toString()
    //         companyLocation = company.location.toString()

    //         $("#company-name").text(companyName)
    //         $("#average-rating").text(companyRating)
    //         $("#average-pay").text(companyPay)
    //         $("#number-reviews").text(companyReviews)
    //         $("#company-location").text(companyLocation)
    //     } else {
    //         console.log("No data to show! To see already created tables, remove force: true in server.js towards the bottom of the page")
    //     }


    // })
})