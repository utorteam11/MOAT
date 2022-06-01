const withAuth = (req, res, next) =>{
    if(!req.session.email){
        res.redirect("/homepage")
    } else {
        next()
    }
}

module.exports = withAuth;