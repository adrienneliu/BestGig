module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("users", {
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1-100]
            }
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false, 
            validate: {
                isEmail: true,
                len: [1-40]
            }
        },

        location: {
            type: DataTypes.STRING,
            allowNull: false, 
            validate: {
                len: [1-100]
            }
        }
    })

    // Users.associate = function(models) {
    //     Users.hasMany(models.reviews, {
    //        onDelete: "cascade"
    //     })
    // }


    
    return Users;
}