const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');
const { Journal,Mood, User } = require('../models');
<<<<<<< HEAD

=======
const { UserContextMenuCommandInteraction } = require('discord.js');
>>>>>>> dev

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

        console.log(req.session.logged_in);
})

router.get('/week', async (req, res) => {
   const journalData = await Journal.findAll({
        where: { user_id: req.seesion.user_id },
        limit: 7,
        order: [['date', 'DESC'],]
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
         order: [['date', 'DESC'],]
    })
 
    const journals = journalData.map((journal) => journal.get({ plain: true }));
 
    res.render('entries', {
         journals
    })
 })

module.exports = router;