const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require('../models/User');
const mongoose = require('mongoose');

passport.use(
    new GoogleStrategy(
        {
            // Options used for strategy
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: '/api/auth/redirect',
        },
        (accessToken, refreshToken, profile, done) => {
            // Callback for passport
            console.log(profile);
            console.log('passport-config cb reached');
            new User({
                _id: mongoose.Types.ObjectId(),
                username: profile.displayName,
                googleId: profile.id,
                mantra: '',
            })
                .save()
                .then((newUser) => {
                    console.log(newUser);
                    console.log('user saved');
                });
        }
    )
);
