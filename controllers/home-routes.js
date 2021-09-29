const router = require('express').Router();
const { Application } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Application.findAll({
        where: {
            user_id: req.session.user_id
        }
    })
        .then(appData => {
            const applications = appData.map(application => application.get({ plain: true }));
            res.render('dashboard', applications);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;