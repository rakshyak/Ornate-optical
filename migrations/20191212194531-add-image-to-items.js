'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'Items',
            'image',
            Sequelize.STRING
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('Items', 'image')
    }
};