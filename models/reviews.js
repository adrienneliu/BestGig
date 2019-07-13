module.exports = function (sequelize, DataTypes) {
    var Reviews = sequelize.define("reviews", {
        company_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1 - 30]
            }
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1 - 30]
            }
        },

        pay_per_hour: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                len: [1 - 30]
            }
        },

        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1 - 10]
            }
        },

        location: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    // Associate Reviews model with Companies
    // Reviews.associate = function (models) {

    //     // The model Reviews belongs to Companies
    //     Reviews.belongsTo(models.companies, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });

    //     Reviews.belongsTo(models.users, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     })
    // };



    // this can autopopulate our database in case we need it

<<<<<<< HEAD
    // var usernameArr = ["Daniel", "John", "Matt", "Chelsea", "Ray", "Bruna", "Ramon", "Lita", "Ivan", "Andrea", "Zoolander"]
    // var companyArr = ["Uber", "Lyft"]
    // var ratingArr = ["1", "2", "3", "4", "5"]
    // var locationArr = ["San Francisco", "Oakland"]

    // for (var i = 0; i < 25; i++) {
    //     var company_name = companyArr[Math.floor(Math.random() * companyArr.length)].toLowerCase()
    //     var username = usernameArr[Math.floor(Math.random() * usernameArr.length)].toLowerCase()
    //     var rating = ratingArr[Math.floor(Math.random() * ratingArr.length)]
    //     var pay_per_hour = Math.floor(Math.random() * (25-15)) + 15
    //     var location = locationArr[Math.floor(Math.random() * locationArr.length)].toLowerCase()

    //     Reviews.create({
    //         company_name: company_name,
    //         username: username,
    //         rating: rating,
    //         pay_per_hour: pay_per_hour,
    //         location: location
    //     })    
    // }
=======
//     var usernameArr = ["Daniel", "John", "Matt", "Chelsea", "Ray", "Bruna", "Ramon", "Lita", "Ivan", "Andrea", "Zoolander"]
//     var companyArr = ["Uber", "Lyft"]
//     var ratingArr = ["1", "2", "3", "4", "5"]
//     var locationArr = ["San Francisco", "Oakland"]

//     for (var i = 0; i < 25; i++) {
//         var company_name = companyArr[Math.floor(Math.random() * companyArr.length)].toLowerCase()
//         var username = usernameArr[Math.floor(Math.random() * usernameArr.length)].toLowerCase()
//         var rating = ratingArr[Math.floor(Math.random() * ratingArr.length)]
//         var pay_per_hour = Math.floor(Math.random() * (25-15)) + 15
//         var location = locationArr[Math.floor(Math.random() * locationArr.length)].toLowerCase()

//         Reviews.create({
//             company_name: company_name,
//             username: username,
//             rating: rating,
//             pay_per_hour: pay_per_hour,
//             location: location
//         })    
//     }
>>>>>>> ffcb01c4704aa0214eb6f9e40f21e5cf53445e62

    return Reviews;
}