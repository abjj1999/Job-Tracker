const withAuth = (req, res, next) => {
    if(!req.session.user_id) {
        //Will redirect the user to the login screen if they try to access a route with this middleware
        //res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;