const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User');

passport.use(new LocalStrategy({
    usernameField: 'email'
}, async (email, password, done) => {

    // Match email's user
    const userEmail = await User.findOne({email})
    if (!userEmail) {
        return done(null, false, {message: 'Not user found'});
    } else {
        // Match password's user
        const match = await userEmail.matchPassword(password);
        if (match) {
            return done(null, userEmail);
        } else {
            return done(null, false, {message: 'Incorrect Password'});
        }
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    })
});


