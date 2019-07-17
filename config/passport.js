// Bring in local strategy
const LocalStrategy = require("passport-local").Strategy;

// bring in sequelize
// const mongoose = require("mongoose")
const sequelize = require("sequelize");

// Need to compare encrypted password to plain text
const bcrypt = require("bcryptjs")

// Load User Model
const User = require("../models/User");

module.exports = function (passport) {
    passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
        // Match User
        User.findOne({ email: email })
            .then(user => {
                // If user does not exist
                if (!user) {
                    return done(null, false, { message: "That email is not registered" })
                }

                // Match password
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) throw err;

                    if (isMatch) {
                        return done(null, user)
                    } else {
                        return done(null, false, { message: 'Password incorrect' })
                    }
                });
            })
            .catch(err => console.log(err))
    }))
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
}