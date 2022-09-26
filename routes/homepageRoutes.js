const router = require('express').Router();
const { Blog, User, Comment } = require('../models');


// route homepage - get all blogs to homepage
router.get('/', async (req, res) => {
    const bloglistData = await Blog.findAll(
      {include: [{
        model: User, 
        attributes: ['username']}
      ]},

      ).catch((err) => { 
       res.json(err);
      });

      const blogList = bloglistData.map((blog) => blog.get({ plain: true }));
        res.render('dashboard', { blogList, 
          loggedIn: req.session.loggedIn, name: req.session.name 
        });
      });




      
//login page > render login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
  res.redirect('/');
  return
  }
  res.render('login');
});

//sign up page > render signup > contain authentication routes
router.get('/signup', (req, res) => {
  res.render('signup');
});


//get one blog by ID
router.get('/blog/:id', async (req, res) => {
    try{ 
        const blogData = await Blog.findByPk(req.params.id)
        const blog = blogData.get({ plain: true });
        console.log(blog)
        res.render('blog-post', {blog,
          loggedIn: req.session.loggedIn,
        });
      } catch (err) {
          res.status(500).json(err);
      };     
  });

// route to create a new post
router.get('/createblog', (req, res, next) => {
  res.render('create-blog')
})


module.exports = router