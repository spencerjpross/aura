const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Suggestions } = require('../models');

router.get('/', (req, res) => {
    res.render('quiz');
});

// router.get('/', (req, res) => {
//     // If the user is already logged in, redirect the request to another route
//     if (req.session.logged_in) {
//         res.redirect('/quiz');
//         return;
//     }

//     res.render('login');
// });

// // Use withAuth middleware to prevent access to route
// router.get('/dashboard', withAuth, async (req, res) => {
//     try {
//         // Find the logged in user based on the session ID
//         const userData = await User.findByPk(req.session.user_id, {
//             attributes: { exclude: ['password'] },
//             include: [{ model: Journal, model: Mood }],
//         });

//         const user = userData.get({ plain: true });

//         res.render('dashboard', {
//             ...user,
//             logged_in: true
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// //GET route to pull all journal entries when cpcking all journal entries button.
// router.get('/alljournals', withAuth, async (req, res) => {
//     try {
//         // Find the logged in user based on the session ID
//         const userData = await User.findByPk(req.session.user_id, {
//             attributes: { exclude: ['password'] },
//             include: [{ model: Journal, model: Mood }],
//         });

//         const user = userData.get({ plain: true });

//         res.render('allJournals', {
//             ...user,
//             logged_in: true
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// //GET route to pull all journal entries and moods for the last week
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

// //GET route to pull all journal entries and moods for the last month
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

// // GET route for new entry
// router.get('/', (req, res) => {
//     // If the user is already logged in, redirect the request to another route
//     if (req.session.logged_in) {
//         res.redirect('/new');
//         return;
//     }

//     res.render('newEntry');
// });

module.exports = router;