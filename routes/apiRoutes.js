//*******************************************************************************
// apiroutes.js this file offers  a set of routes for displaying 

// Dependencies 
var socialNetwork = require("../models/");

// Routes
module.exports = function(app) {

    //get all user
    app.get("/api/all", function(req, res){
    socialNetwork.findAll({}).then(function(result) {
        res.json(results);
    });
});

        app.get("/api/users/:user", function(req, res){
        socialNetwork.findAll({}).then(function(result)

{

}