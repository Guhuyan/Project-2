module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 30]
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true,
      len: [1, 50]
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      isDecimal: true,
      isLowercase: true,
      isUppercase: true,
      len: [1, 30]
    },
    birthmonth: {
      type: DataTypes.INTEGER,
      allowNull: false,
      isDecimal: false,
      isLowercase: true,
      isUppercase: true,
      len: [1, 2]
    },
    birthday: {
      type: DataTypes.INTEGER,
      allowNull: false,
      isDecimal: false,
      isLowercase: true,
      isUppercase: true,
      len: [1, 2]
    },
    birthyear: {
      type: DataTypes.INTEGER,
      allowNull: false,
      isDecimal: false,
      isLowercase: true,
      isUppercase: true,
      len: [1, 2]
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isLoggedIn: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    errors: {
      type: DataTypes.STRING
    }
  });

  User.associate = function (models) {
    // Associating User with Posts
    // When an User is deleted, also delete any associated Posts
    User.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return User;
};
