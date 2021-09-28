const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Application } = require('../../models');

//Returns all applications
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
router.get('/:id', (req, res) => {
    Application.findOne({
        where: {
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
router.post('/', (req, res) => {
    Application.create({
        jobTitle: req.body.jobTitle,
        companyName: req.body.companyName,
        companyURL: req.body.companyURL,
        description: req.body.description,
        Date: req.body.Date,
        user_id: req.body.user_id
    })
        .then(appData => {
            res.json({
                message: 'Successfully create application',
                data: appData
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//Updates an application
router.put('/:id', (req, res) => {
    Application.update(req.body, {
        where: {
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
router.delete('/:id', (req, res) => {
    Application.destroy({
        where: {
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