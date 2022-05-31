const router = require('express').Router();
const { Tenant, Property } = require('../models')

router.get('/', (req, res) => {
    console.log(req.query)

    Property.findOne({
        where: {
            nickname: req.query.property_name
        }
    })
    .then(propertyData => {
        if(!propertyData) {
            res.status(404).json({ message: 'There is no property with that name!'})
            return;
        }

        property = propertyData.get({ plain: true })
        res.render('tenantProperty', {property});
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
})

module.exports = router;