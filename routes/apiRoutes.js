// Routes
// module.exports = function (app) {
//     app.get("/", function (req, res) {
//         socialNetwork.findAll({}).then(function (result) {
//             res.json(result)
//         });
//     });
// }

// Dependencies
// =============================================================

// Requiring our Todo model
module.exports = function(app) {
  // GET route for getting all of the posts
  app.get("/api/users", function(req, res) {
    // Add sequelize code to find all users, and return them to the user with res.json
    db.User.findAll({}).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/users/:username", function(req, res) {
    // Add sequelize code to find a single user where the id is equal to req.params.id,
    // Then, return the result to the user with res.json
    db.Post.findOne({
      where: {
        username: req.params.username
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // POST route for saving a new post
  app.post("/api/users/create", function(req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json
    db.User.create({
      username: req.body.username,
      password: req.body.password
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    // Add sequelize code to delete a post where the id is equal to req.params.id,
    // then return the result to the user using res.json
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    // Add code here to update a post using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
    db.Post.update({
      where: {
        id: req.body.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
};
