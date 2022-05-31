const router = require("express").Router();

router.get('/', (req, res) => {
    res.render('homepage', {
        loggedIn: false,
        landlord: true
    })
});

router.get("/signup", (req, res) => {
  res.render("signup", {
    loggedIn: true,
    landlord: true,
  });
});


module.exports = router;
