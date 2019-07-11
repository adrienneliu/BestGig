module.exports = function (sequelize, DataTypes) {
    var Companies = sequelize.define("companies", {
        company_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1 - 50]
            }

        },

        average_rating: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                len: [1 - 10]
            }
        },

        average_pay_per_hour: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                len: [1 - 20]
            }
        },

        number_reviews: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1 - 20]
            }
        }
    });

    // Here we want to associate the model Companies with the model Reviews
    Companies.associate = function (models) {

        // Companies have many reviews
        Companies.hasMany(models.reviews, {
            onDelete: "cascade"
        });
    };

    Companies.create({
        company_name: "Uber",
        average_rating: '3',
        average_pay_per_hour: '15',
        number_reviews: '0'
    })

    Companies.create({
        company_name: "Lyft",
        average_rating: '3',
        average_pay_per_hour: '15',
        number_reviews: '0'
    })

    Companies.create({
        company_name: "Lugg",
        average_rating: '3',
        average_pay_per_hour: '15',
        number_reviews: '0'
    })

    return Companies;
}



