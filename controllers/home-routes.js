const router = require("express").Router();
const withAuth = require("../utils/auth");

router.get('/', withAuth, (req, res) => {
    res.render('homepage', {
        loggedIn: true,
        type: req.session.type
    })
});

router.get("/signup", (req, res) => {
  res.render("signup", {
    loggedIn: false,
    type: req.session.type
  });
});


module.exports = router;
