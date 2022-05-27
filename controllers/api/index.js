const router = require('express').Router();

const landlordRoutes = require('./landlord-routes');
const propertyRoutes = require('./property-routes');
const unitRoutes = require('./unit-routes');

router.use('/landlords', landlordRoutes);
router.use('/properties', propertyRoutes);
router.use('/units', unitRoutes);

module.exports = router;