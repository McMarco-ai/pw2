const Sequelize = require('sequelize');
const database = require('../db');

const HousingType = database.define("housingtype", {
    info: {
        type: Sequelize.STRING
    }
});

module.exports = HousingType