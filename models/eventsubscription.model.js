const Sequelize = require('sequelize');
const database = require('../db');

const EventSubscription = database.define("eventsubscription", {

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
    }


})

module.exports = EventSubscription