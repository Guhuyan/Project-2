// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const db = require("./models");
const router = require("./router");

// Creating an express server with the app variable
const app = express();

// Setting up a dynamic port
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("public"));

// Router
app.use("/", router);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
