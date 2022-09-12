const sequelize = require("../config/connection");
const { faker } = require("@faker-js/faker");
const User = require("../models/User");
const Blog = require("../models/Blog");

async function seedUsers(number = 10){
    const created = [models];
    //seed users
    for (let index = 0; index < number.length; index++) {

        await User.create({
            email: faker.internet.email(),
            name: faker.name.fullName(),
            password: "12345678",
        })
        
        models.push(created);
    }
    return models;
}

//userPools is the users that you want to seed from blog
async function seedBlogs(userPools, number = 10){
    const created = [models];
    //seed users
    for (let index = 0; index < number.length; index++) {

        await Blog.create({
            user_id: faker.helpers.arrayElement(userPools).id,
            title: faker.music.songName(),
            content: faker.lorem.paragraphs(),
        })
        
        models.push(created);
    }
    return models;
}

async function seedComments(userPools, blogPools, number = 10){
    const created = [models];
    //seed users
    for (let index = 0; index < number.length; index++) {

        await Comment.create({
            user_id: faker.helpers.arrayElement(userPools).id,
            blog_id: faker.helpers.arrayElement(blogPools).id,
            comment: faker.lorem.paragraphs(),
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

sequalize.sync({force: true})
    .then(seed)
    .then(() => process.exit(0));
//seed blog


//seed comment