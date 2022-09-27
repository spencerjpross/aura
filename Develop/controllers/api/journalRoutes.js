const router = require('express').Router();
const sequelize = require('../../config/connection');

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

//CREATE a Journal entry
router.post('/', async (req, res) => {
    try {
        const journalData = await Journal.create(req.body);
        res.status(200).json(journalData);
    } catch (err) {
        res.status(400).json(err);
    };
});



module.exports = router;