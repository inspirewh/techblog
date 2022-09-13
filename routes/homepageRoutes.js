const router = require('express').Router();
const Blog = require('../models/Blog');


// route to get all weeks to main homepage
router.get('/', async (req, res) => {
    const bloglistData = await Blog.findAll().catch((err) => { 
        res.json(err);
      });
        const blogList = bloglistData.map((blog) => blog.get({ plain: true }));
        res.render('dashboard', { blogList });
      });
  

      // route to get all workouts to workout library
router.get('/dashboard', async (req, res) => {
    const bloglistData = await Blog.findAll().catch((err) => { 
        res.json(err);
      });
        const blogList = bloglistData.map((blog) => blog.get({ plain: true }));
        res.render('dashboard', { blogList });
      });

//get one workout by ID
router.get('/blog/:id', async (req, res) => {
    try{ 
        const blogData = await Blog.findByPk(req.params.id);
        if(!blogData) {
            res.status(404).json({message: 'No blog with this id!'});
            return;
        }
        const blog = blogData.get({ plain: true });
        console.log(blog)
        res.render('dashboard', {blog,
          loggedIn: req.session.loggedIn,
        });
      } catch (err) {
          res.status(500).json(err);
      };     
  });


module.exports = router;