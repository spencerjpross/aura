const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
<<<<<<< HEAD
      res.redirect('/');
=======
      res.redirect('/login');
>>>>>>> dev
    } else {
      next();
    }
  };
  
  module.exports = withAuth;