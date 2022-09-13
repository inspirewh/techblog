const router = require('express').Router();
const auth = require('./api/auth');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use(auth);
router.use(blog);


module.exports = router;
