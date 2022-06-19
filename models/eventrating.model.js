const Sequelize = require('sequelize');
const database = require('../db');

const EventRating = database.define("eventrating", {

    eventid: {
        type: Sequelize.INTEGER,
        references: {
            model: 'events',
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

module.exports = EventRating