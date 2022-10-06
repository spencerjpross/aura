const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Journal, Mood } = require('../models');



router.get('/', (req, res) => {
    if(req.session.logged_id) {
        res.redirect('homepage');
        return;
    }

    res.render('login');
});

// Use withAuth middleware to prevent access to route
router.get('/homepage', withAuth, async (req, res) => {
    try {
        //Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
<<<<<<< HEAD
            include: {model: Journal},
=======

>>>>>>> dev
        });

        const user = userData.get({ plain: true });
        console.log(`User is logged in by:${req.session.id}`);
        res.render('homepage', {
            user,
        });
<<<<<<< HEAD
        console.log(user)
=======
>>>>>>> dev
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET route to pull all journal entries when clicking all journal entries button.
// router.get('/entries', withAuth, async (req, res) => {
//     try {
//         // Find the logged in user based on the session ID
//         const userData = await User.findByPk(req.session.user_id, {
//             attributes: { exclude: ['password'] },
//             include: [{ model: Journal, model: Mood }],
//         });

//         const user = userData.get({ plain: true });

//         res.render('entries', {
//             ...user,
//             logged_in: true
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

//GET route to pull all journal entries and moods for the last week
// router.get('/lastweek', withAuth, async (req, res) => {
//     try {
//         // Find the logged in user based on the session ID
//         const userData = await User.findByPk(req.session.user_id, {
//             where: {
//                 start_datetime: {
//                     $gte: moment().subtract(7, 'days').toDate()
//                 }
//             },
//             attributes: { exclude: ['password'] },
//             include: [{ model: Journal, model: Mood }],
//         });

//         const user = userData.get({ plain: true });
//         console.log(user)

//         res.render('lastWeek', {
//             ...user,
//             logged_in: true
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

//GET route to pull all journal entries and moods for the last month
// router.get('/lastmonth', withAuth, async (req, res) => {
//     try {
//         // Find the logged in user based on the session ID
//         const userData = await User.findByPk(req.session.user_id, {
//             where: {
//                 start_datetime: {
//                     $gte: moment().subtract(30, 'days').toDate()
//                 }
//             },
//             attributes: { exclude: ['password'] },
//             include: [{ model: Journal, model: Mood }],
//         });

//         const user = userData.get({ plain: true });
//         console.log(user)

//         res.render('lastMonth', {
//             ...user,
//             logged_in: true
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// GET route for new entry
router.get('/quiz', withAuth, (req, res) => {
    res.render('quiz');
});



module.exports = router;
