const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');


// route homepage - gets all blogs from the database and renders them to the homepage
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
        res.render('homepage', { blogList, 
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
  if(req.session.loggedIn) {
    res.redirect('/');
    return;
}
  res.render('signup');
});


//get one blog by ID
router.get('/blog/:id', withAuth, async (req, res) => {
    try{ 
        const blogData = await Blog.findByPk(req.params.id, {
          include:[
            {model: Comment,
                include:[{model: User,
                    attributes: ['username']}]
            },
            
            {model: User, attributes: ['username']}
        ],
        })
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
router.get('/dashboard/new', (req, res) => {
  res.render('create-blog')
})


// Renders the edit page,
router.get('/edit/:id', withAuth, async (req, res, next)=> {
  try {
      const blogData = await Blog.findByPk(req.params.id) 
      const blog = blogData.get({ plain: true });
      console.log(blog)
      res.render('edit-blog', { blog })
      
  } catch (error) {
      console.log(error)
  }
  
}) 

module.exports = router