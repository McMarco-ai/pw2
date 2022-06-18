const Sequelize = require('sequelize');
const sequelize = new Sequelize(`mysql://${process.env.dbusername}:${process.env.dbpassword}@${process.env.dbhostname}:3306/${process.env.dbname}`)

try {
    const res = sequelize.sync();
    console.log(res);
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;