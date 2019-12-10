'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Items', [
      {
        name: 'glasses 1',
        price: 189.99,
        quantity: 12,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'glasses 2',
        price: 989.99,
        quantity: 12,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'glasses 3',
        price: 199.99,
        quantity: 12,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'glasses 4',
        price: 159.99,
        quantity: 12,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'glasses 5',
        price: 389.99,
        quantity: 12,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'glasses 6',
        price: 289.99,
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