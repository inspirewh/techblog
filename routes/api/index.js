const router = require('express').Router();
const authRoutes = require('./authRoutes');
const homepageRoutes = require('../homepageRoutes')
const blogRoutes = require('./blog')

router.use(authRoutes);
router.use(homepageRoutes);
router.use('/dashboard', blogRoutes);


module.exports = router;