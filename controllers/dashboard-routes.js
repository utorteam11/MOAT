const router = require('express').Router();

router.get('/properties', (req, res) => {
    // find properties where landlord_id is equal to req.session.user_id

    const property = [{
        address: "100 Somewhere Drive",
        name: "Somewhere"
    }]
    res.render('properties', {
        property,
        loggedIn: true,
        landlord: true,
        first_name: 'Taimur'
    })
})

module.exports = router;