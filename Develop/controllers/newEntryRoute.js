const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');
const { Suggestions, Mood } = require('../models');

router.get('/', async (req, res) => {
    res.render('quiz');
})

router.get('/:id', async (req, res) => {

    const moodSugg = await Mood.findByPk(req.params.id, {
        include: [{ model: Suggestions }],
    })

    const sugg = moodSugg.get ({ plain: true });

    function getRandSugg(set) {
        let suggTitles = Array.from(set);
        return suggTitles[Math.floor(Math.random() * suggTitles.length)];
    }

    const sTitles = sugg.suggestions.map ((s) => {
        return s.title;
    });

    let moodSuggestion = getRandSugg(sTitles);
    let moodName = sugg.mood_name;

    res.render('newentry', {
        moodSuggestion,
        moodName
    })

    console.log(moodSuggestion);
    console.log(sugg.mood_name);
});


module.exports = router;