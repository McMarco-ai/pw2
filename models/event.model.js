const Sequelize = require('sequelize');
const database = require('../db');

const Event = database.define("event", {

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
            model: 'eventtypes',
            key: 'id'
        }
    },
    title: {
        type: Sequelize.STRING
    },
    desc: {
        type: Sequelize.STRING
    },
    startdate: {
        type: Sequelize.DATE
    },
    enddate: {
        type: Sequelize.DATE
    },
    starttime: {
        type: Sequelize.TIME
    },
    endtime: {
        type: Sequelize.TIME
    }




});

module.exports = Event