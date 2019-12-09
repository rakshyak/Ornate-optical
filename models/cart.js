'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    userId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER
  }, {});
  Cart.associate = function(models) {
    Cart.hasMany(models.Item, {
      foreignKey: 'itemId'
    })
  };
  return Cart;
};