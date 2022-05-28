<<<<<<< HEAD
const router = require('express').Router();
const apiRoutes = require('./api')
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');
=======
const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
>>>>>>> 71c271dec401f2484a8f66e5d3bab7049c915c26

router.use("/api", apiRoutes);
router.use("/", homeRoutes);

<<<<<<< HEAD
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes)

module.exports = router;
=======
module.exports = router;
>>>>>>> 71c271dec401f2484a8f66e5d3bab7049c915c26
