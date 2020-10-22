'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Contacts', [{
            firstname: 'Hernan',
            lastname: 'Chain',
            phone: '3105579962',
            email: 'hernanchain.dev@gmail.com',
            createdAt: new Date().toDateString(),
            updatedAt: new Date().toDateString()
        }, {
            firstname: 'Alirio',
            lastname: 'Gonzalez',
            phone: '3208186284',
            email: 'hernancadena98@gmail.com',
            createdAt: new Date().toDateString(),
            updatedAt: new Date().toDateString()
        }])
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};