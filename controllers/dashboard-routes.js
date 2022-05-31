const router = require('express').Router();

router.get('/properties', (req, res) => {
    // find properties where landlord_id is equal to req.session.user_id

    const property = [{
        address: "100 Somewhere Drive",
        nickname: "Somewhere",
        id: 1
    }]
    res.render('properties-dash', {
        property,
        loggedIn: true,
        landlord: true,
        first_name: 'Taimur'
    })
})


router.get("/propertyform", (req, res) => {
    res.render('property-form', {
        loggedIn: true,
        landlord: true 
    });
})

router.get('/properties/:id', (req, res) => {
    // find properties where landlord_id is equal to req.session.user_id and property is equal to req.params.id

    const property = [{
        address: "100 Somewhere Drive",
        nickname: "Somewhere",
        id: 1
    }]

    const issues = [{
        issue_title: "Broken Faucet",
        issue_text: "Faucet is broken as hell",
        status: "Open",
        unit_number: 110
    }]
    res.render('single-property', {
        property,
        loggedIn: true,
        landlord: true,
        first_name: 'Taimur',
        issues
    })
})

module.exports = router;