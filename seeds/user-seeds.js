const { User } = require('../models');

const userSeedData = [{
        username: 'Jessica',
        password: 'Smith123'

    },
    {
        username: 'Darren',
        password: 'Ryan123'
    },
    {
        username: 'Max',
        password: 'Williams123'
    }
];

const seedUsers = () => User.bulkCreate(userSeedData);

module.exports = seedUsers;