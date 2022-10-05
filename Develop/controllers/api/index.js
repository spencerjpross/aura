const router = require('express').Router();

// const journalRoutes = require('./journalRoutes');
// const newEntryRoute = require('./newEntryRoute');
const userRoute = require('./userRoute');
const journalRoutes = require('./journalRoutes');

// router.use('/journalentries', journalRoutes);
// router.use('/new', newEntryRoute);
router.use('/users', userRoute);
router.use('/journals', journalRoutes);

// Default route for any other url's
router.get("*", (req, res) => {
    res.render('404');
  });

module.exports = router;
