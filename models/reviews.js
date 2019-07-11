module.exports = function (sequelize, DataTypes) {
    var Reviews = sequelize.define("reviews", {
        company_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1 - 30]
            }
        },

        user_name: {
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
        }
    });

    // Associate Reviews model with Companies
    Reviews.associate = function (models) {

        // The model Reviews belongs to Companies
        Reviews.belongsTo(models.companies, {
            foreignKey: {
                allowNull: false
            }
        });

        Reviews.belongsTo(models.users, {
            foreignKey: {
                allowNull: false
            }
        })
    };

    // Reviews.belongsTo(models.Users, {
    //     foreignKey: {
    //         allowNull: false
    //     }
    // })



    return Reviews;
}