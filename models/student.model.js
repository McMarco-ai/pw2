const Sequelize = require('sequelize');
const database = require('../db');

const Student = database.define("student", {
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
    },
    banned: {
        type: Sequelize.BOOLEAN
    }
});

module.exports = Student