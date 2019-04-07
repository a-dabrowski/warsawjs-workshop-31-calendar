const { Router } = require('express');
const passport = require('passport');
const apiRouter = require('./routers/apiRouter');

const router = Router();
//here logic for login
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/auth/github', passport.authenticate('github'));
  
router.get('/auth/github/callback', passport.authenticate('github', {
  failureRedirect: '/login',
  successRedirect: '/',
}));
router.use(apiRouter);

module.exports = router;
