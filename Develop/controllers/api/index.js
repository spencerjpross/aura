const router = require('express').Router();

// const journalRoutes = require('./journalRoutes');
// const newEntryRoute = require('./newEntryRoute');
const userRoute = require('./userRoute');

// router.use('/journalentries', journalRoutes);
// router.use('/new', newEntryRoute);
router.use('/users', userRoute);

module.exports = router;
