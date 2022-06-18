const Sequelize = require('sequelize');
const database = require('../db');

const EventType = database.define("eventtype", {

    info: {
        type: Sequelize.STRING
    }

});

module.exports = EventType