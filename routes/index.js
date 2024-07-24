const router = require('express').Router();
const userRoutes = require('./api/userRoutes');
const thoughtRoutes = require('./api/thoughtRoutes');
const reactionRoutes = require('./api/reactionRoutes');

console.log('Setting up user routes');
router.use('/users', userRoutes);

console.log('Setting up thought routes');
router.use('/thoughts', thoughtRoutes);

console.log('Setting up reaction routes');
router.use('/reactions', reactionRoutes);

module.exports = router;