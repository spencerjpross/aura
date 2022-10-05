const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');
const { Journal, Mood } = require('../models');

router.get('/', async (req, res) => {
    try {
        const journalData = await Journal.findAll({
            order: [['date', 'DESC']],
            // include: [{ model: Mood }],
            // attributes: {
            //     include: [
            //         [
            //             sequelize.literal(
            //                 `(SELECT mood_name FROM mood WHERE journal.mood.id = mood.id)`,
            //             ),
            //         ],
            //     ],
            // },
        });

        const journals = journalData.map((journal) => journal.get({ plain: true }));

        res.render('entries', {
            journals
        })
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;