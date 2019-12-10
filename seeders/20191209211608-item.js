'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Items', [{
      name: 'Ray-bans x146',
      price: 189.99,
      quantity: 12,
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Items', null, {});

  }
};