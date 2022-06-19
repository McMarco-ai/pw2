const Sequelize = require('sequelize');
const database = require('../db');

const EventComment = database.define("eventcomment", {

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
    comment: {
        type: Sequelize.STRING
    }





});

module.exports = EventComment