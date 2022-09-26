const router = require('express').Router();
const apiRoutes = require('./api');
const homepageRoutes = require('./homepageRoutes')
const dashboardRoutes = require('./dashboardRoutes')

router.use(apiRoutes);
router.use(homepageRoutes);
router.use(dashboardRoutes);


module.exports = router;