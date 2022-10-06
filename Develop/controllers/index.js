const router = require('express').Router();
const apiRoutes = require('./api')
const homeRoutes = require('./homeRoutes');
const newEntryRoute = require('./newEntryRoute');
// const pastEntryRoute = require('./pastEntryRoute');


// const app = express();
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/quiz', newEntryRoute);
router.use('/entries', pastEntryRoute);

// Default route for any other url's
router.get("*", (req, res) => {
  res.render('404');
});

module.exports = router;
