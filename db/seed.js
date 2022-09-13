const sequelize = require("../config/connection");
const { faker } = require('@faker-js/faker');
const User = require("../models/User");
const Blog = require("../models/Blog");
const Comment = require("../models/Comment");

async function seedUsers(number = 10){
    
    const models = [];

    const admin = await User.create({
        email: 'olivia@test.com',
        name: 'oliviaTest',
        password: 'test123456'
    })
    models.push(admin);
    
    for (let index = 0; index < number; index++) {

        const created = await User.create({
            email: faker.internet.email(),
            name: faker.name.fullName(),
            password: "1234567891",
        });

        models.push(created);
    }
    return models;
}

//userPools is the users that you want to seed from blog
//seed blog
async function seedBlogs(userPools, number = 10){
    const models = [];
    //seed users
    for (let index = 0; index < number; index++) {

        const created = await Blog.create({
            user_id: faker.helpers.arrayElement(userPools).id,
            title: faker.music.songName(),
            content: faker.lorem.paragraphs(),
        })
        
        models.push(created);
    }
    return models;
}

//seed comment
async function seedComments(userPools, blogPools, number = 10){
    const models = [];
    
    for (let index = 0; index < number; index++) {

        const created = await Comment.create({
            user_id: faker.helpers.arrayElement(userPools).id,
            blog_id: faker.helpers.arrayElement(blogPools).id,
            content: faker.lorem.paragraphs(),
        })
        
        models.push(created);
    }
    return models;
}

async function seed(){
    const users = await seedUsers(10)
    const blogs = await seedBlogs(users)
    const comments = await seedComments(users, blogs)

}

sequelize.sync({force: true})
    .then(seed)
    .then(() => process.exit(0));

