const router = require('express').Router();
const auth = require('./api/auth');
const blog = require('./api/blog');
const homeRoutes = require('./homepageRoutes');

router.use('/', homeRoutes);
router.use(auth);
router.use(blog);


module.exports = router;
