const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Suggestions } = require('../../models');

router.get('/', (req, res) => {
    res.render('quiz');
});

module.exports = router;