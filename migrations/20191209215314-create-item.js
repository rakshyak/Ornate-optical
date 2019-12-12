'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Items', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            price: {
                type: Sequelize.FLOAT
            },
            quantity: {
                type: Sequelize.INTEGER
            },
            categoryId: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                onDelete: 'CASCADE',
                references: {
                    model: 'Categories',
                    key: 'id',
                    as: 'categoryId',
                }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Items');
    }
};