const router = require('express').Router();
const { Landlord, Property, Unit, Tenant } = require('../models');
const withAuth = require("../utils/auth");

router.get('/', (req, res) => {
  Tenant.findOne(
    {
      where: {
        id: req.session.tenant_id
      },
      include: [
        {
          model: Unit,
          attributes: ["id", "unit_number", "property_id", "rent", "rent_due"],
          include: [
            {
              model: Property,
              attributes: ["id", "address", "nickname"],
              include: {
                model: Landlord,
                attributes: ["id", "first_name", "last_name", "email"],
              },
            }
          ]
        }
      ]
    }
  )
  .then(tenantData => {
    const tenant = tenantData.get({ plain: true });
    res.render('unit-dash', {
      tenant,
      loggedIn: true,
      landLord: req.session.landLord
    })
  })
})

router.get('/unitconfirm', (req, res) => {
    console.log(req.query)

    Unit.findOne({
        where: {
            unit_password: req.query.access_code
        },
        include: [
            {
              model: Property,
              attributes: ["id", "address", "nickname"]
            }
          ],
    })
    .then(unitData => {
        if(!unitData) {
            res.status(404).json({ message: 'There is no unit with that code!'})
            return;
        }

        const unit = unitData.get({ plain: true })
        console.log(unit)
        res.render('tenant-unit', {
          unit,
          loggedIn: true,
          Landlord: req.session.landLord
        });
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
});

router.get('/properties/:id', withAuth, (req, res) => {
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
        res.render('tenant-property', {
          property,
          loggedIn: true,
          type: req.session.type
        });
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
});

router.get('/units/:id', withAuth, (req, res) => {
    
})

module.exports = router;