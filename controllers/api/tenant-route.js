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

// get all tenants
router.get("/", (req, res) => {
  // console.log(req.query);
  // if(req.query.tenant == 1) {
  //     console.log('requesting tenants');
  // }

  Tenant.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((tenantData) => res.json(tenantData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// get one tenant
router.get("/:id", (req, res) => {
  console.log(req.query);

  Tenant.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
    include: [
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
        ],
      },
    ],
  })
    .then((tenantData) => {
      if (!tenantData) {
        res.status(404).json({ message: "There is no tenant with this id!" });
        return;
      }

      res.json(tenantData);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// post a tenant
router.post("/", (req, res) => {
  Tenant.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    unit_id: req.body.unit_id,
  })
    .then((dbTenantData) => {
      req.session.save(()=>{
        req.session.tenant_id = dbTenantData.id;
        req.session.email = dbTenantData.email;
        req.session.loggedIn = true;
        req.session.tenant = true;

        res.json(dbTenantData)
      })
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
  Tenant.findOne({
    where: {email: req.body.email}
  })
  .then(dbTenantData=>{
    if(!dbTenantData){
      res.status(400).json({message: 'No Tenant of this email!'});
      return;
    }

    const validPassword = dbTenantData.checkPassword(req.body.password);
    if(!validPassword){
      res.status(400).json({message: 'Invalid password!'});
      return;
    }

    req.session.save(()=>{
        req.session.email = dbTenantData.email;
        req.session.loggedIn = true;

        res.json({dbTenantData, message: "Logged in."});
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

// delete a tenant
router.delete("/:id", (req, res) => {
  Tenant.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbTenantData) => {
      if (!dbTenantData) {
        res.status(404).json({ message: "There is no tenant with that id!" });
        return;
      }

      res.json(dbTenantData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
