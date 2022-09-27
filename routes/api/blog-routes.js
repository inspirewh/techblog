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
router.put('/update/:id', withAuth, async(req, res) => {
  const updateBlog = await Blog.update(
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
  res.json(updateBlog);
})

// Delete route to remove an existing post
router.delete("/delete/:id", withAuth, async (req, res)=> {
  try {
      const destroyData = await Blog.destroy({
          where: {
              id: req.params.id
          }
      })
      
      console.log(destroyData)

      if(!destroyData) {
          res.status(404).json({
              message: "No post found with this id"
          })
          return;
      } 
      res.json(destroyData)

  } catch (error) {
      console.log(error)
      res.status(500).json(error)
  }

})




module.exports = router