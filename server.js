const express = require("express");
const db = require(".models");

const PORT = process.env.PORT || 8080;
const app = express();

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Listening on Port: ", PORT);
  });
});
