module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    author: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Post.createPost = function(req) {
    Post.create({
      title: req.body.title,
      body: req.body.body,
      author: req.session.user.username
    });
  };

  return Post;
};
