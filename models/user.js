'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    username: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // User.belongsToMany(models.Item, {
    //   through: 'Cart',
    //   as: 'items',
    //   foreignKey: 'userId',
    //   onDelete: 'CASCADE'
    // })
    User.hasMany(models.Cart)
    // User.hasMany(models.Review, {
    //   foreignKey: 'reviewId'
    // })
  };
  return User;
};