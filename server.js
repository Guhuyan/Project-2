const express = require("express");
const db = require(".models");
const db = require("body-parser");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Listening on Port: ", PORT);
  });
});
