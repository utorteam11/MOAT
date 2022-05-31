const router = require('express').Router();
const apiRoutes = require('./api')
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');

const tenantPortalRoutes = require('./tenantportal-routes');

router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/portal', tenantPortalRoutes);


module.exports = router;
