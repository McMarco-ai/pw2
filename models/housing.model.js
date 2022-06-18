const Sequelize = require('sequelize');
const database = require('../db');

const Housing = database.define("housing", {

    landlordid: {
        type: Sequelize.INTEGER,
        references: {
            model: 'landlords',
            key: 'id'
        }
    },
    typeid: {
        type: Sequelize.INTEGER,
        references: {
            model: 'housingtypes',
            key: 'id'
        }
    },
    title: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATE
    },
    info: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.DOUBLE
    },
    location: {
        type: Sequelize.STRING
    },
    maxpeople: {
        type: Sequelize.INTEGER
    },
    currpeople: {
        type: Sequelize.INTEGER
    }


});

module.exports = Housing