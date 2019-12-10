'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Categories', [
      {
        name: 'Mens',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Womens',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});

  }
};