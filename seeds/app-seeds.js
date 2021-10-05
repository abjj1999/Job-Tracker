const { Application } = require('../models');

const AppData = [
    {
        jobTitle: 'Front-end Developer',
        companyName: 'Apple',
        companyURL: 'https://www.apple.com/',
        description: ' responsible for using their knowledge of programming languages to code user-side applications',
        date: '9/28/2021',
        status: 'Pending',
        notify_me: true,
        user_id: 1
    },
    {
        jobTitle: 'Back-end Developer',
        companyName: 'Tesla',
        companyURL: 'https://www.tesla.com/',
        description: ' responsible for using their knowledge of programming languages to code server-side applications',
        date: '9/27/2021',
        status: 'Pending',
        notify_me: false,
        user_id: 3
    },
    {
        jobTitle: 'Full-stack Developer',
        companyName: 'google',
        companyURL: 'https://www.google.com/',
        description: ' responsible for using their knowledge of programming languages to code user-side applications',
        date: '9/20/2021',
        status: 'Ready to Apply',
        notify_me: false,
        user_id: 2
    },
    {
        jobTitle: 'Front-end Developer',
        companyName: 'Apple',
        companyURL: 'https://www.apple.com/',
        description: ' responsible for using their knowledge of programming languages to code user-side applications',
        date: '9/21/2021',
        status: 'Ready to Apply',
        notify_me: false,
        user_id: 4
    },
]

const seedApp = () => Application.bulkCreate(AppData);

module.exports = seedApp;