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

// get all units
router.get("/", (req, res) => {
  Issue.findAll()
    .then((issueData) => res.json(issueData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// get one issue
router.get("/:id", (req, res) => {
  Issue.findOne({
    where: {
      id: req.params.id,
    },

    include: [
      {
        model: Comments,
        attributes: ["id", "comment_text", "issue_id"],
      },

      {
        model: Unit,
        attributes: ["id", "first_name", "last_name", "email", "unit_id"],
        include: [
          {
            model: Tenant,
            attributes: ["id", "first_name", "last_name", "email", "unit_id"],
          },
        ],
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
    .then((issueData) => {
      if (!issueData) {
        res.status(404).json({ message: "There is no issue with this id!" });
        return;
      }

      res.json(issueData);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// post a issue
router.post("/", (req, res) => {
  Issue.create({
    issue_title: req.body.issue_title,
    issue_text: req.body.issue_text,
    status: req.body.status,
    unit_id: req.body.unit_id,
  })
    .then((dbIssueData) => res.json(dbIssueData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete a issue
router.delete("/:id", (req, res) => {
  Issue.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbIssueData) => {
      if (!dbIssueData) {
        res.status(404).json({ message: "There is no issue with that id!" });
        return;
      }

      res.json(dbIssueData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
