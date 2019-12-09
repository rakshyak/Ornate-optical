'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    itemId: DataTypes.INTEGER
  }, {});
  Category.associate = function(models) {
    Category.hasMany(models.Item, {
      foreignKey: 'itemId'
    })
  };
  return Category;
};