$(document).ready(function () {
    // Here we get the inputs of the companies
    var nameInput = $("#user-name");
    var companyInput = $("#company")
    var ratingInput = $("#rating");
    var paymentInput = $("#payment")
    var locationInput = $("#location")
    // The form used to get the user input
    var userDataForm = $("#userData")

    $(userDataForm).on('submit', function (event) {
        event.preventDefault();
        var newUserData = {
            user_name: nameInput.val().trim(),
            location: locationInput.val().trim()
            // company: companyInput.val().trim(),
            // rating: ratingInput.val().trim(),
            // payment: paymentInput.val().trim()
        }

        // var newCompanyData = {
        //     company_name: companyInput.val().trim(),
        // }
        console.log(newUserData)
        $.post("/api/users", newUserData).then(function () {
            console.log("Updated Users Data")
        })

        // Here we send over the company Data which must include
        $.post("/api/companies", newCompanyData).then(function() {
            console.log("Updated Companies Data")
        })

    })
});