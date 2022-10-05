const router = require('express').Router();
const quizRoute = require('./quizRoutes');
const journalRoute = require('./journalRoutes');

router.use('/quiz', quizRoute);
router.use('/journal', journalRoute);

module.exports = router;
