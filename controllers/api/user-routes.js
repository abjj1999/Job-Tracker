const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User } = require('../../models');

//Returns all users
router.get('/', (req, res) => {
    User.findAll({
        attributes: {
            exclude: ['password']
        }
    })
        .then(userData => {
            res.json({
                message: 'Successfully returned all users',
                data: userData
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//Returns a single user based on the Id
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: {
            exclude: ['password']
        },
        where: {
            id: req.params.id
        }
    })
        .then(userData => {
            if (!userData) {
                res.status(404).json({
                    messsage: 'No user with that id'
                });
                return;
            }
            res.json({
                message: `Successfully returned user with the id of ${req.params.id}`,
                data: userData
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//Creates a user
router.post('/', (req, res) => {
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    })
        .then(userData => {
            res.json({
                message: 'Successfully create user',
                data: userData
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//Updates a user
router.put('/:id', (req, res) => {
    User.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(userData => {
            if (!userData) {
                res.status(404).json({
                    message: 'No user with that id'
                });
                return;
            }
            res.json({
                message: `Successfully updated user with the id of ${req.params.id}`,
                data: userData
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//Deletes a user
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(userData => {
            if (!userData) {
                res.status(404).json({
                    message: 'No user with that id'
                });
                return;
            }
            res.json({
                message: `Successfully deleted user with the id of ${req.params.id}`,
                data: userData
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;