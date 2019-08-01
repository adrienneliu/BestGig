const mongoose = require("mongoose");

const CompaniesSchema = new mongoose.Schema({
    company_name: {
        type: String,
        required: true
    },
    pay_per_hour: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }

})

const Companies = mongoose.model("Companies", CompaniesSchema);

module.exports = Companies;
