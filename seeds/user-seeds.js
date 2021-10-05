const { User } = require('../models');
const sequelize = require('../config/connection');

const UserData = [
    {
        firstName: 'Abdullah',
        lastName: 'Al-hilfi',
        email: 'abdullahalhilfi21@gmail.com',
        password: '1Abdala7'
    },
    {
        firstName: 'Bailey',
        lastName: 'Poe',
        email: 'baileypoe1222@gmail.com',
        password: 'baileyPoe123'
    },
    {
        firstName: 'Torres',
        lastName: 'Isaias',
        email: 'torres.j.isaias@gmail.com',
        password: 'torresj1'
    },
    {
        firstName: 'Zach',
        lastName: 'Yarbrough',
        email: 'zachyarbro@gmail.com',
        password: 'zach123'
    },
]

const seedUsers = () => User.bulkCreate(UserData, {individualHooks: true})

module.exports = seedUsers;