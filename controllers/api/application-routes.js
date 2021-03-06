const router = require('express').Router();
const { Application, User } = require('../../models');
const withAuth = require('../../utils/auth');
const emailer = require('../../utils/email');

//Returns all applications from all users
router.get('/', (req, res) => {
    Application.findAll()
        .then(appData => {
            res.json({
                message: `Successfully returned all applications`,
                data: appData
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//Returns a single application based on the Id
router.get('/:id', withAuth, (req, res) => {
    Application.findOne({
        where: {
            user_id: req.session.user_id,
            id: req.params.id
        }
    })
        .then(appData => {
            if (!appData) {
                res.status(404).json({
                    messsage: 'No application with that id'
                });
                return;
            }
            res.json({
                message: `Successfully returned application with the id of ${req.params.id}`,
                data: appData
            });

        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });


});

//Creates an application
router.post('/', withAuth, (req, res) => {
    Application.create({
        jobTitle: req.body.jobTitle,
        companyName: req.body.companyName,
        companyURL: req.body.companyURL,
        description: req.body.description,
        date: req.body.date,
        status: req.body.status,
        notify_me: req.body.notify_me,
        user_id: req.session.user_id
    })
        .then(appData => {
            res.json({
                message: 'Successfully create application',

            });
            console.log(appData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
        User.findOne({
            where: {
                id: req.session.user_id,
            }
        }).then(data => {
            const userEmail = data.email;
            console.log(req.body.notify_me)
            if(req.body.notify_me === true){
                emailer(userEmail);
            }
        })
        
});

//Updates an application
router.put('/:id', withAuth, (req, res) => {
    Application.update(req.body, {
        where: {
            user_id: req.session.user_id,
            id: req.params.id
        }
    })
        .then(appData => {
            if (!appData) {
                res.status(404).json({
                    message: 'No application with that id'
                });
                return;
            }
            res.json({
                message: `Successfully updated application with the id of ${req.params.id}`,
                data: appData
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//Deletes an application
router.delete('/:id', withAuth, (req, res) => {
    Application.destroy({
        where: {
            user_id: req.session.user_id,
            id: req.params.id
        }
    })
        .then(appData => {
            if (!appData) {
                res.status(404).json({
                    message: 'No application with that id'
                });
                return;
            }
            res.json({
                message: `Successfully deleted application with the id of ${req.params.id}`,
                data: appData
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;