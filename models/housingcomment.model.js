const Sequelize = require('sequelize');
const database = require('../db');

const HousingComment = database.define("housingcomment", {

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
    comment: {
        type: Sequelize.STRING
    }





});

module.exports = HousingComment