const seedUsers = require('./user-seeds.js');
const seedBlogs = require('./blog-seeds');
const seedComments = require('./comment-seeds.js');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedBlogs();
    await seedComments();
    process.exit(0);
};

seedAll();