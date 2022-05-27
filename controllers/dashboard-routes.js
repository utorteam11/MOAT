const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('property-dashboard')
})

module.exports = router;