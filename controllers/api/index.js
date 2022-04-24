const router = require('express').Router();

// gathers all the routes established in this directory for easy feeding to express

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

// sets up further directing for more granular api calls

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;