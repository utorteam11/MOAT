const router = require('express').Router();
const { Unit } = require('../../models');
const sequelize = require('../../config/connection')

// get all units
router.get('/', (req, res) => {
    Unit.findAll()
    .then(unitData => res.json(unitData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

// get one unit
router.get('/:id', (req, res) => {
    Unit.findOne(
        {
            where: {
                id: req.params.id
            },
        }
    )
    .then(unitData => {
        if(!unitData) {
            res.status(404).json({ message: 'There is no unit with this id!'})
            return;
        }

        res.json(unitData)
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

// post a unit
router.post('/', (req, res) => {
    Unit.create({
        unit_number: req.body.unit_number,
        property_id: req.body.property_id,
        rent: req.body.rent,
        rent_due: req.body.rent_due,
    })
    .then(dbUnitData => res.json(dbUnitData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// delete a unit
router.delete('/:id', (req, res) => {
    Unit.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbUnitData => {
        if(!dbUnitData) {
            res.status(404).json({ message: 'There is no unit with that id!'});
            return;
        };

        res.json(dbUnitData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;