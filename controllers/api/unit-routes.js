const router = require("express").Router();
const {
  Unit,
  Issue,
  Landlord,
  Tenant,
  Comments,
  Property,
} = require("../../models");
const sequelize = require("../../config/connection");
const uniqid = require('uniqid');

// get all units
router.get("/", (req, res) => {
  Unit.findAll()
    .then((unitData) => res.json(unitData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// get one unit
router.get("/:id", (req, res) => {
  Unit.findOne({
    where: {
      id: req.params.id,
    },

    include: [
      {
        model: Issue,
        attributes: ["id", "issue_title", "issue_text", "status", "unit_id"],
        include: [
          {
            model: Comments,
            attributes: ["id", "comment_text", "issue_id"],
          },
        ],
      },
      {
        model: Tenant,
        attributes: ["id", "first_name", "last_name", "email", "unit_id"],
      },
      {
        model: Property,
        attributes: ["id", "address", "nickname"],
        include: {
          model: Landlord,
          attributes: ["id", "first_name", "last_name", "email"],
        },
      },
    ],
  })
    .then((unitData) => {
      if (!unitData) {
        res.status(404).json({ message: "There is no unit with this id!" });
        return;
      }

      res.json(unitData);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// post a unit
router.post("/", (req, res) => {
  Unit.create({
    unit_number: req.body.unit_number,
    unit_password: uniqid(),
    property_id: req.body.property_id,
    rent: req.body.rent,
    rent_due: req.body.rent_due,
  })
    .then((dbUnitData) => res.json(dbUnitData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete a unit
router.delete("/:id", (req, res) => {
  Unit.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUnitData) => {
      if (!dbUnitData) {
        res.status(404).json({ message: "There is no unit with that id!" });
        return;
      }

      res.json(dbUnitData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
