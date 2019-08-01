// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var flash = require("connect-flash");
var session = require("express-session");
var passport = require("passport")

require("./config/passport")(passport)
// Sets up the Express App
// =============================================================
var app = express();

// Requiring our models for syncing
var db = require("./config/keys").MongoURI;

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err))

//Telling express we want to use main handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// BodyParser. No longer have to install separate module!
// We say extended false so that we can data from our form with req.body
app.use(express.urlencoded({ extended: false }));

// Express Session  
app.use(session({
  secret: 'keyboard dog',
  resave: true,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global Vars
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg")
  res.locals.error_msg = req.flash("error_msg")
  res.locals.error = req.flash("error")

  next();
})

// Static directory
app.use(express.static("public"));

// Routes
app.use('/', require("./routes/index"));
app.use('/users', require('./routes/users-api-routes'))
app.use("/home", require("./routes/reviews-api-routes"))
app.use("/home", require(".//routes/companies-api-routes"))
  
// Syncing our sequelize models and then starting our Express app
// =============================================================
var PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port: ${PORT}`))

// For sync({}) put force: true to erase data from database everytime we reload the server
