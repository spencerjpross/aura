const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Journal, Mood } = require('../../models');
const withAuth = require('../../utils/auth');

//GET all Journal Entries
router.get('/', async (req, res) => {
    try {
        const journalData = await Journal.findAll({
            include: [{}]
        });
        res.status(200).json(journalData);
    } catch (err) {
        res.status(500).json(err);
    };
});

//GET a single Journal Entry
router.get('/:id', async (req, res) => {
    try {
        const journalData = await Journal.findByPk(req.params.id, {
            include: [{}]
        });
        if (!journalData) {
            res.status(404).json({ message: 'No journal entry found.'});
            return;
        }
        res.status(200).json(journalData);
    } catch (err) {
        res.status(500).json(err);
    };
});

//GET specific journals related to a mood from the pie chart.
router.get('/:id', async (req, res) => {
    try {
      const moodData = await Mood.findByPk(req.params.id, {
        include: [{ model: Journal }],
        attributes: {
          include: [
            [
              sequelize.literal(
                `'(SELECT COUNTALL(*) FROM ${mood_name} AS mood WHERE mood.id = journal.id)'`
              ),
              `'${mood_name}Journals'`
            ]
          ]
        }
      });
  
      if (!readerData) {
        res.status(404).json({ message: 'No reader found with that id!' });
        return;
      }
  
      res.status(200).json(readerData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//CREATE a Journal entry
router.post('/', async (req, res) => {
    try {
        const journalData = await Journal.create(req.body);
        res.status(200).json(journalData);
    } catch (err) {
        res.status(400).json(err);
    };
});

router.put('/:id', withAuth, async (req, res) => {
    Journal.update(req.body, {
        where: {id: req.params.id},
    })
    .then(journals => res.json(journals))
    .catch((err) => res.status(500).json(err))
})

router.delete('/:id', withAuth, async (req, res) => {
    try {
      const journalData = await Journal.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!journalData) {
        res.status(404).json({ message: 'No journal found with this id!' });
        return;
      }
      res.status(200).json(journalData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;