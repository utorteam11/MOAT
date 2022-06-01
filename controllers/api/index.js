const router = require("express").Router();

const landlordRoutes = require("./landlord-routes");
const propertyRoutes = require("./property-routes");
const unitRoutes = require("./unit-routes");
const issueRoutes = require("./issue-routes");
const commentRoutes = require("./comment-routes");
const tenantRoutes = require("./tenant-route");

router.use("/landlords", landlordRoutes);
router.use("/properties", propertyRoutes);
router.use("/units", unitRoutes);
router.use("/tenants",tenantRoutes );
router.use("/issues", issueRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
