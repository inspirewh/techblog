const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Comment } = require('../../models/index-model');


// route to get all comments on post page 
//router.get('/comments', async (req, res) => {
  //  const commentData = await Comment.findAll().catch((err) => { 
    //    res.json(err);
      //});
        //const commentList = commentData.map((comment) => comment.get({ plain: true }));
        //res.render('blog-post', { commentList });
      //});



//create api route to post add new blog
// post request to handle comment submission
router.post('/comments', withAuth, async(req,res) =>{
    const commentData = await Comment.create({
      content: req.body.content,
      user_id: req.session.user_id,
      blog_id: req.body.blog_id,
    })
    res.json(commentData);
  })



  
module.exports = router;