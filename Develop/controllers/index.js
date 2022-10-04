const router = require('express').Router();
const homeRoutes = require('./homepageRoute');
const apiRoutes = require('./api')
router.use('/', homeRoutes);
router.use('/api', apiRoutes)


// Default route for any other url's
// app.get("*", (req, res) => {
//     res.send("PAGE NOT FOUND");
//   });


  module.exports = router;