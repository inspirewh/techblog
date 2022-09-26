const router = require('express').Router();
const userRoutes = require('./user-routes');
const commentRoutes = require('./comment-routes')
const blogRoutes = require('./blog-routes')

router.use(userRoutes);
router.use(blogRoutes);
router.use(commentRoutes)

module.exports = router;