const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');
const { Journal,Mood, User } = require('../models');


router.get('/', async (req, res) => {
        const journalData = await Journal.findAll({
            where: { user_id: req.session.user_id },
            order: [['date', 'DESC']],
        });

        const journals = journalData.map((journal) => journal.get({ plain: true }));

        console.log(journals);

        res.render('entries', {
            journals
        })

        console.log(journals);
})

router.get('/week', async (req, res) => {
     
        const journalData = await Journal.findAll({
        where: { user_id: req.seesion.user_id },
        limit: 2,
        order: [['date', 'DESC']],
   })

   const journals = journalData.map((journal) => journal.get({ plain: true }));

   res.render('entries', {
        journals
   })
})

router.get('/month', async (req, res) => {
    const journalData = await Journal.findAll({
         where: { user_id: req.seesion.user_id },
         limit: 30,
         order: [['date', 'DESC']],
    })
 
    const journals = journalData.map((journal) => journal.get({ plain: true }));
 
    res.render('entries', {
         journals
    })
 })

module.exports = router;