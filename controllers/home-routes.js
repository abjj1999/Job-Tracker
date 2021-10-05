const router = require('express').Router();
const { Application } = require('../models');
const withAuth = require('../utils/auth');

//Returns all applications from the session user and renders the dashboard template
router.get('/', withAuth, (req, res) => {
    Application.findAll({
        where: {
            user_id: req.session.user_id
        }
    })
        .then(appData => {
            const applications = appData.map(application => application.get({ plain: true }));
            console.log(req.session.loggedIn);
            res.render('dashboard', {applications});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//Renders the login template
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

//Renders the signup template
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

module.exports = router;