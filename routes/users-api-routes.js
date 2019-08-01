const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");

// User Model
var User = require("../models/User");

// Login Page
router.get('/login', (req, res) => res.render('login', { title: 'Login' }));

// Register Page
router.get("/register", (req, res) => res.render('register', { title: 'Register' }));

// Register Handle
router.post("/register", (req, res) => {
    const { name, email, password, password2 } = req.body;
    let errors = [];

    // Validations
    // Check required fields
    if (!name || !email || !password || !password2) {
        console.log("Please fill in all fields")
        errors.push({ msg: "Please fill in all fields" })
    }

    // Check if password equals confirmed password
    if (password != password2) {
        console.log("Passwords do not match")
        errors.push({ msg: "Passwords do not match" })
    }

    // Check password length
    if (password.length < 6) {
        console.log("Password should be at least 6 characters")
        errors.push({ msg: "Password should be at least 6 characters" })
    }   

    if (errors.length > 0) {
        res.render("register", {
            errors,
            name,
            email,
            password,
            password2
        });
    } else {
        // Validation passed
        User.findOne({ email: email })
            .then(user => {
                if (user) {
                    console.log("Email is already registered")
                    errors.push({ msg: "Email is already registered" })
                    res.render('register', {
                        errors,
                        name,
                        email,
                        password,
                        password2
                    });
                    // User exists
                } else {
                    const newUser = new User({
                        name,
                        email,
                        password
                    });

                    // Hash Password    
                    bcrypt.genSalt(10, (err, salt) =>
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) throw err;

                            //  Set password to hashed
                            newUser.password = hash;
                            //  Save user
                            newUser.save()
                                // If user is saved we want to redirect to login page
                                .then(user => {
                                    req.flash("success_msg", "You are now registered and can log in")
                                    res.redirect("login")
                                })
                                .catch(err => console.log(err));

                        }))
                }
            });
    }

})

// Login Handle
router.post('/login', (req, res, next) => {
    passport.authenticate("local", {
        successRedirect: '/home',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next);
});

router.get('/logout', (req, res) => {
    // passport middleware allows us to use the logout function
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');
});

module.exports = router;