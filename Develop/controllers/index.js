const router = require('express').Router();

<<<<<<< Updated upstream
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api')
=======
const apiRoutes = require('./api')
const homeRoutes = require('./homeRoutes');
>>>>>>> Stashed changes

router.use('/', homeRoutes);
router.use('/api', apiRoutes)

<<<<<<< Updated upstream
  module.exports = router;
=======
module.exports = router;
>>>>>>> Stashed changes
