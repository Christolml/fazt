
const { Router } = require('express');
const router = Router();

const { renderSignupForm, renderSigninForm, signup, signin, logout } = require('../controllers/users.controllers');

// Sign Up
router.get('/users/signup', renderSignupForm);

router.post('/users/signup', signup);

// Sign in
router.get('/users/signin', renderSigninForm);

router.post('/users/signin', signin);

// Log out
router.get('/users/logout', logout);


module.exports = router;