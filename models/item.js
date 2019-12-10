'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    quantity: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {});
  Item.associate = function(models) {
    Item.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      onDelete: 'CASCADE'
    })
    Item.hasMany(models.Review, {
      foreignKey: 'reviewId'
    })
    Item.belongsToMany(models.User, {
      through: 'Cart',
      foreignKey: 'itemId'
    })
  };
  return Item;
};