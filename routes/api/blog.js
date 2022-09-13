const router = require('express').Router();
const { restart } = require('nodemon');
const Blog = require('../../models/Blog');
const withAuth = require('../../utils/withAuth');


// when the user visits the homepage render to show each week depending on how many progrerss forms have been completed


/// create 

//  get the data from the req , burpees, pushups ....

//  user_id ( get from req. session)
router.get('/', async(req,res) =>{
    
const blogs = await Blog.findOne({ where: { user_id: req.session.user_id }})
console.log(blogs)
  res.render('homepage', {
  blogs: blogs.get({plain: true})
})
})

//create api route to post add new blog
// post request to handle blog submission
router.post('/', withAuth, async(req,res) =>{
  const postBlog = await Blog.create({
    title: req.body.title,
    user_id: req.session.user_id,
    content: req.body.content,
  })
  res.json(postBlog);
})

// Put route to update/edit an existing blog
router.put('/update/:id', withAuth, (req, res, next) => {
  Blog.update(
      {
          title: req.body.title,
          content: req.body.content
      },
      {
          where: {
              id: req.params.id
          }
      }        
  )
})




module.exports = router