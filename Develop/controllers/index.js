const router = require('express').Router();
const homepageRoute = require('./homepageRoute');
const apiRoutes = require('./api')
// const app = express();
router.use('/', homepageRoute);
router.use('/api', apiRoutes)


// Default route for any other url's
// app.get("*", (req, res) => {
//     res.send("PAGE NOT FOUND");
//   });


  module.exports = router;