const router = require('express').Router();
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const { Journal } = require('../../models');

//GET a single Journal Entry
router.get('/:id', async (req, res) => {
    try {
        const journalData = await Journal.findByPk(req.params.id, {
            
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

// //GET specific journals related to a mood from the pie chart.
// router.get('/:id', async (req, res) => {
//     try {
//       const moodData = await Mood.findByPk(req.params.id, {
//         include: [{ model: Journal }],
//         attributes: {
//           include: [
//             [
//               sequelize.literal(
//                 `'(SELECT (*) FROM journal WHERE journal.mood_id LEFT JOIN mood WHERE mood.id = journal.id)'`
//               ),
//               `'${mood_name} Journals'`
//             ]
//           ]
//         }
//       });
  
//       if (!moodData) {
//         res.status(404).json({ message: '' });
//         return;
//       }
  
//       res.status(200).json(moodData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

//CREATE a Journal entry
router.post('/new', async (req, res) => {
    try {
      const createData = await Journal.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(createData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

//UPdate a journal Entry
router.put('/:id', withAuth, async (req, res) => {
    Journal.update(req.body, {
        where: {id: req.params.id},
    })
    .then(journals => res.json(journals))
    .catch((err) => res.status(500).json(err))
})

//DELETE Route for a journal entry
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