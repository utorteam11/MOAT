const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage', {
        loggedIn: true,
        landlord: true
    })
});

router.get('/signup', (req, res) => {
    res.render('signup', {
        loggedIn: false,
        landlord: true
    })
});

router.get('/tenantform', (req, res) => {
    res.render('tenantform')
});

module.exports = router;