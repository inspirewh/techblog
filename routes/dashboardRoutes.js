const router = require('express').Router();
const { Blog, User , Comment } = require('../models');
const withAuth = require('../utils/auth');

const sequelize = require('../config/connection');

// Dashboard page > render dashboard 
router.get('/dashboard', withAuth, async (req, res, next) => {
    const bloglistData = await Blog.findAll({
        where: {
            user_id: req.session.user_id
        },
    })
        res.render('dashboard', { bloglistData });
      });









module.exports = router;