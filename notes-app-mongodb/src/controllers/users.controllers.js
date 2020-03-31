const usersCtrl = {};

const passport = require('passport');

const User = require('../models/User');

// Sign up
usersCtrl.renderSignupForm = (req, res) => {
    res.render('users/signup');
}

usersCtrl.signup = async(req, res) => {
    const errors = [];
    const { username, email, password, confirm_password } = req.body;
    if ( password != confirm_password ) {
        errors.push({text: 'Password do not match'});
    }
    if (password.length < 4) {
        errors.push({text: 'Passwords must be at least 4 characters.'});
    }
    if (!username) {
        errors.push({text: 'Username field is empty'});
    }
    if (!email) {
        errors.push({text: 'Email field is empty'});
    }
    if (errors.length > 0) {
        res.render('users/signup', {
            errors,
            username,
            email
        })
    } else {
        const emailUser = await User.findOne({email: email});
        if (emailUser) {
            req.flash('error_msg', 'The email is already in use');
            res.redirect('/users/signup');
        } else {
            const newUser = new User({username, email, password});
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            req.flash('success_msg', 'You are registered now!');
            res.redirect('/users/signin'); 
        }
    }
};

// Sign in
usersCtrl.renderSigninForm = (req, res) => {
    res.render('users/signin');
}

usersCtrl.signin = passport.authenticate('local', {
    failureRedirect: '/users/signin',
    successRedirect: '/notes',
    failureFlash: true
});

// logout
usersCtrl.logout = (req, res) => {
    req.logout();
    req.flash('success_msg', 'bye');
    res.redirect('/users/signin');
}

module.exports = usersCtrl;