const express = require("express")
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");

// Splash Page
router.get('/', (req, res) => res.render('welcome', { title: "Splash Page" }));

// Home Page
router.get("/home", ensureAuthenticated, (req, res) => res.render('home', { title: 'Home', name: req.user.name }));

module.exports = router;
