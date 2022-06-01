const router = require("express").Router();
const {
  Property,
  Landlord,
  Unit,
  Issue,
  Comments,
  Tenant,
} = require("../../models");
const sequelize = require("../../config/connection");

// get all propertys
router.get("/", (req, res) => {
  Property.findAll()
    .then((propertyData) => res.json(propertyData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// get one property
router.get("/:id", (req, res) => {
  Property.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((propertyData) => {
      if (!propertyData) {
        res.status(404).json({ message: "There is no property with this id!" });
        return;
      }

      res.json(propertyData);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.get("/:id/", (req, res) => {
  Property.findOne({
    where: {
      id: req.params.id,
    },

    include: [
      {
        model: Landlord,
        attributes: { exclude: ["password"] },
      },

      {
        model: Unit,
        attributes: ["id", "unit_number", "property_id", "rent", "rent_due"],
        include: [
          {
            model: Issue,
            attributes: [
              "id",
              "issue_title",
              "issue_text",
              "status",
              "unit_id",
            ],
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
        ],
      },
    ],
  })
    .then((propertyData) => {
      if (!propertyData) {
        res.status(404).json({ message: "There is no property with this id!" });
        return;
      }

      res.json(propertyData);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// post a property
router.post("/", (req, res) => {
  console.log(req.body);
  Property.create({
    address: req.body.address,
    nickname: req.body.nickname,
    // landlord_id: req.body.landlord_id,
    landlord_id: "1"

  })
    .then((dbPropertyData) => res.json(dbPropertyData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete a property
router.delete("/:id", (req, res) => {
  Property.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPropertyData) => {
      if (!dbPropertyData) {
        res.status(404).json({ message: "There is no property with that id!" });
        return;
      }

      res.json(dbPropertyData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
