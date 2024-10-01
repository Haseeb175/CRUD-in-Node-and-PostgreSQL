const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'Haseeb', '427332', {
    host: 'localhost',
    dialect: 'postgres'
});

const postgresConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = { postgresConnection };