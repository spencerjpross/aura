const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Journal, Mood } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/new');
      return;
    }
  
    res.render('newEntry');
  });