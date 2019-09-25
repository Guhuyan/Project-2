const mysql = require('mysql')
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 8080
const express = require("express");
var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.get('/',function(req,res) {
  res.render('index');
});

app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});