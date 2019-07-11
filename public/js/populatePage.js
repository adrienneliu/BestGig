
$(document).ready(function () {

    // Feel free to change the info here! The get is used to grab info from the sql database and post the info on the home.html page.
    
    var companies = []
    $.get("/api/companies", function (data) {
        companies = data;
        console.log(companies)
        if (data) {
            company = companies[0]
            companyName = company.company_name.toString()
            companyRating = company.average_rating.toString()
            companyPay = company.average_pay_per_hour.toString()
            companyReviews = company.number_reviews.toString()

            $("#company-name").text(companyName)
            $("#average-rating").text(companyRating)
            $("#average-pay").text(companyPay)
            $("#number-reviews").text(companyReviews)
        } else {
            console.log("No data to show! To see already created tables, remove force: true in server.js towards the bottom of the page")
        }


    })


})