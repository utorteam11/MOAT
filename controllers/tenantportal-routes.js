const router = require('express').Router();
const { Landlord, Property, Unit } = require('../models')

router.get('/', (req, res) => {
    console.log(req.query)

    Landlord.findOne({
        attributes: { exclude: ["password"] },
        where: {
            email: req.query.landlord_email
        },
        include: [
            {
              model: Property,
              attributes: ["id", "address", "nickname"],
              include: [
                {
                  model: Unit,
                  attributes: [
                    "id",
                    "unit_number",
                    "property_id",
                    "rent",
                    "rent_due",
                  ]
                },
              ],
            },
          ],
    })
    .then(landlordData => {
        if(!landlordData) {
            res.status(404).json({ message: 'There is no landlord with that name!'})
            return;
        }

        const landlord = landlordData.get({ plain: true })
        res.render('tenant-landlord', {landlord});
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
});

router.get('/properties/:id', (req, res) => {
    Property.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
              model: Unit,
              attributes: [
                "id",
                "unit_number",
                "property_id",
                "rent",
                "rent_due",
              ]
            },
        ],
    })
    .then(propertyData => {
        if(!propertyData) {
            res.status(404).json({ message: 'There is no property with that id!'})
            return;
        }

        const property = propertyData.get({ plain: true })
        res.render('tenant-property', {property});
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
});

router.get('/units/:id', (req, res) => {
    
})

module.exports = router;