const { User } = require('../models');
const bcrypt = require('bcrypt');

var password = bcrypt.hashSync("Smith1234", 10);

const userSeedData = [{
        username: 'Jessica',
        password: password

    },
    {
        username: 'Darren',
        password: password
    },
    {
        username: 'Max',
        password: password
    }
];

const seedUsers = () => User.bulkCreate(userSeedData);

module.exports = seedUsers;