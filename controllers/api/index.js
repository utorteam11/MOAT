const router = require('express').Router();

const landlordRoutes = require('./landlord-routes');

router.use('/landlords', landlordRoutes);

module.exports = router;