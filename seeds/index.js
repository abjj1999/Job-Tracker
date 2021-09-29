const seedUsers = require('./user-seeds');
const seedApp = require('./app-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedApp();

    process.exit(0);
}

seedAll();