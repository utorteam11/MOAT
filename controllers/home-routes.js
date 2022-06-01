const router = require("express").Router();
const withAuth = require("../utils/auth");

router.get('/', (req, res) => {
    console.log(req.session)

    res.render('homepage', {
      loggedIn: req.session.loggedIn,
      landlord: req.session.landLord
    })
});

router.get("/signup", (req, res) => {
  res.render("signup", {
    loggedIn: false,
    type: req.session.type
  });
});


module.exports = router;
