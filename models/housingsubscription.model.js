const Sequelize = require('sequelize');
const database = require('../db');

const HousingSubscription = database.define("housingsubscription", {

    housingid: {
        type: Sequelize.INTEGER,
        references: {
            model: 'housings',
            key: 'id'
        }
    },
    studentid: {
        type: Sequelize.INTEGER,
        references: {
            model: 'students',
            key: 'id'
        }
    },
    approved: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }


})

module.exports = HousingSubscription