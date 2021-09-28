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
            req.session.save(() => {
                req.session.user = userData.id;
                req.session.loggedIn = true;

                res.json({
                    message: 'Successfully created user',
                    data: userData
                });
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//Logs the user in based on email and password
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(userData => {
        if (!userData) {
            res.status(404).json({ message: 'No user with that email address' });
            return;
        }

        //Uses an instance in the user model to check if the password matches
        const validPassword = userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(404).json({ message: 'Incorrect password' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.loggedIn = true;

            res.json({ user: userData, message: 'You are now logged in' });
        });
    });
});

//Logs the user out
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
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