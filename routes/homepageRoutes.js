const router = require('express').Router();
const Blog = require('../models/Blog');


// route to get all weeks to main homepage
router.get('/', async (req, res) => {
    const bloglistData = await Blog.findAll().catch((err) => { 
        res.json(err);
      });
        const blogList = bloglistData.map((blog) => blog.get({ plain: true }));
        res.render('homepage', { blogList });
      });
  


module.exports = router;