const Sequelize = require('sequelize');
const database = require('../db');

const Landlord = database.define("landlord", {
    name: {
        type: Sequelize.STRING
    },
    birthday: {
        type: Sequelize.DATE
    },
    number: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
});

module.exports = Landlord