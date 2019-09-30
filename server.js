// Dependencies
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const env = require("dotenv");
const bodyparser = require("body-parser");
const db = require("./models");
const router = require("./router");

// Creating an express server with the app variable
const app = express();

// Setting up a dynamic port
const PORT = process.env.PORT || 8080;

// Express Session
app.use(
  session({
    secret: "Keyboard Cat",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24, httpOnly: true }
  })
);

// let sessionOptions = session({
//   host: "localhost",
//   port: PORT,
//   user: "root",
//   password: "rootroot123",
//   database: "app_db"
// });

// const sessionStore = new MySQLStore(sessionOptions);

// app.use(
//   session({
//     key: "session_cookie",
//     secret: "keyboard cat cat",
//     store: sessionStore,
//     resave: false,
//     saveUninitialized: false,
//     cookie: { maxAge: 1000 * 60 * 30, httpOnly: true }
//   })
// );

// Router
app.use("/", router);

// Middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Static directory
app.use(express.static("public"));

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("public"));

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
