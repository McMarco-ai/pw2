const Sequelize = require('sequelize');
const database = require('../db');

const HousingRating = database.define("housingrating", {

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
    rating: {
        type: Sequelize.DOUBLE
    }





});

module.exports = HousingRating