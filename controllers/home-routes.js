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
            if(req.query.search) {
                const apps = appData.map(application => application.get({ plain: true }));
                const applications = apps.filter(application => {
                    let companyName = application.companyName.toLowerCase();
                    let jobTitle = application.jobTitle.toLowerCase();
                    let description = application.description.toLowerCase();
                    let query = req.query.search.toLowerCase();
                    if(companyName.includes(query) || jobTitle.includes(query) || description.includes(query)) {
                        return application;
                    }
                });
                console.log(applications)
                res.render('dashboard', { applications, loggedIn: true });
            } else {
                const applications = appData.map(application => application.get({ plain: true }));
                res.render('dashboard', { applications, loggedIn: true });
            }
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