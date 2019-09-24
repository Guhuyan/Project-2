module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      isDecimal: true,
      isLowercase: true,
      isUppercase: true,
    },
    isLoggedin: {
      type: DataTypes.BOOLEAN,
      DefaultValue: false
    }
  });
  return User;
};
