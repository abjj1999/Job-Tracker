const router = require('express').Router();

const appRoutes = require('./application-routes');
const userRoutes = require('./user-routes');

router.use('/applications', appRoutes);
router.use('/users', userRoutes);

module.exports = router;