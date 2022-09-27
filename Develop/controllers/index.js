const router = require('express').Router();
const homeRoutes = require('./homepage');
const app = express();
router.use('/homepage', homeRoutes);

module.exports = router;


// Default route for any other url's
app.get("*", (req, res) => {
    res.send("PAGE NOT FOUND");
  });
