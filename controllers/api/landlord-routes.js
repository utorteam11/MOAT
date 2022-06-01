const router = require("express").Router();
const {
  Landlord,
  Property,
  Comments,
  Issue,
  Tenant,
  Unit,
} = require("../../models");
const sequelize = require("../../config/connection");

// get all landlords
router.get("/", (req, res) => {
  // console.log(req.query);
  // if(req.query.landlord == 1) {
  //     console.log('requesting landlords');
  // }

  Landlord.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((landlordData) => res.json(landlordData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// get one landlord
router.get("/:id", (req, res) => {
  console.log(req.query);

  Landlord.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
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
            ],
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
                attributes: [
                  "id",
                  "first_name",
                  "last_name",
                  "email",
                  "unit_id",
                ],
              },
            ],
          },
        ],
      },
    ],
  })
    .then((landlordData) => {
      if (!landlordData) {
        res.status(404).json({ message: "There is no landlord with this id!" });
        return;
      }

      res.json(landlordData);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// post a landlord
router.post("/", (req, res) => {
  Landlord.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbLandlordData) => {
      req.session.save(()=>{
        req.session.landlord_id = dbLandlordData.id;
        req.session.email = dbLandlordData.email;
        req.session.loggedIn = true;
        req.session.type = 'landlord';
      })
      res.json(dbLandlordData)
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
  Landlord.findOne({
    where: {email: req.body.email}
  })
  .then(dbLandlordData=>{
    if(!dbLandlordData){
      res.status(400).json({message: 'No landlord of this email!'});
      return;
    }

    const validPassword = dbLandlordData.checkPassword(req.body.password);
    if(!validPassword){
      res.status(400).json({message: 'Invalid password!'});
      return;
    }

    req.session.save(()=>{
        req.session.email = dbLandlordData.email;
        req.session.loggedIn = true;
        req.session.type = 'landlord';

        res.json({dbLandlordData, message: "Logged in."});
    });
  });
});

router.post('/logout', (req, res)=>{
  if(req.session.loggedIn){
    req.session.destroy(()=>{
      res.status(204).end();
    })
  }
  else {
    res.status(404).end();
  }
})

// delete a landlord
router.delete("/:id", (req, res) => {
  Landlord.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbLandlordData) => {
      if (!dbLandlordData) {
        res.status(404).json({ message: "There is no landlord with that id!" });
        return;
      }

      res.json(dbLandlordData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
