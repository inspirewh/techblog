const router = require('express').Router();
const Blog = require('../../models/Blog');
const withAuth = require('../../utils/auth');



//create api route to post add new blog
// post request to handle blog submission
router.post('/blog', withAuth, async(req,res) =>{
  const postBlog = await Blog.create({
    title: req.body.title,
    user_id: req.session.user_id,
    content: req.body.content,
  })
  res.json(postBlog);
})

// Put route to update/edit an existing blog
router.put('/update/:id', withAuth, (req, res) => {
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