const { Comment } = require('../models');

const commentSeedData = [{
        user_id: 1,
        blog_id: 1,
        content: "Great article, I enjoyed reading this"
    },
    {
        user_id: 2,
        blog_id: 2,
        content: "Thanks for the info",
    },
    {
        user_id: 3,
        blog_id: 3,
        content: "Really informative"
    }
];

const seedComments = () => Comment.bulkCreate(commentSeedData);

module.exports = seedComments;
