const router = require('express').Router();
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const { Suggestions, Mood } = require('../../models');

router.get('/', async (req, res) => {
    res.render('quiz');
})

router.get('/:id', async (req, res) => {
    const testSuggest = await Mood.findByPk(req.params.id, {
        include: [{ model: Suggestions }],
    })

    const sugg = testSuggest.get ({ plain: true });

    function getRandSugg(set) {
        let items = Array.from(set);
        return items[Math.floor(Math.random() * items.length)];
    }

    const sTitles = sugg.suggestions.map ((s) => {
        return s.title;
    });

    let xx = getRandSugg(sTitles);

    res.status(200).json(xx);
    console.log(xx);
});


module.exports = router;