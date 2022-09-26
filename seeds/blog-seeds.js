const { Blog } = require('../models');

const blogSeedData = [{
        title: 'HOW TO CREATE A STICKY FOOTER WITH FLEXBOX',
        content: 'In this article, we will show you an easy technique that allows you to create a sticky footer with flexbox. It takes just a few lines of code and a couple of minutes to implement it.',
        user_id: 1

    },
    {
        title: '8 BEST PRODUCTIVITY TIPS FOR DEVELOPERS AND PROGRAMMERS',
        content: 'In this collection, you can find our best productivity tips for developers and programmers, from finding the best developer tools to taking regular breaks to successfully eliminating distractions while working.',
        user_id: 2
    },
    {
        title: '6 BEST BUILD TOOLS FOR FRONTEND DEVELOPMENT',
        content: 'In this article, we have collected the best build tools you can use in frontend development. Note that all these tools run in the command line, so they don’t come with a graphical user interface.',
        user_id: 3
    }
];

const seedBlogs = () => Blog.bulkCreate(blogSeedData);

module.exports = seedBlogs;