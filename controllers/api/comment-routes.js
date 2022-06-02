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
  Comments.findAll()
    .then((commentsData) => res.json(commentsData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// get one comments
/*
router.get("/:id", (req, res) => {
  Comments.findOne({
    where: {
      id: req.params.id,
    },

    include: [
      {
        model: Issue,
        attributes: ["id", "issue_title", "issue_text", "status", "unit_id"],
        include: [
          {
            model: Unit,
            attributes: ["id", "first_name", "last_name", "email", "unit_id"],
            include: [
              {
                model: Tenant,
                attributes: [
                  "id",
                  "first_name",
                  "last_name",
                  "email",
                  "unit_id",
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
          },
        ],
      },
    ],
  })
    .then((commentsData) => {
      if (!commentsData) {
        res.status(404).json({ message: "There is no comments with this id!" });
        return;
      }

      res.json(commentsData);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});
*/

// post a comments
router.post("/", (req, res) => {
  Comments.create({
    comment_text: req.body.comment_text,
    issue_id: req.body.issue_id,
  })
    .then((dbCommentsData) => res.json(dbCommentsData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete a comments
router.delete("/:id", (req, res) => {
  Comments.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCommentsData) => {
      if (!dbCommentsData) {
        res.status(404).json({ message: "There is no comments with that id!" });
        return;
      }

      res.json(dbCommentsData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
