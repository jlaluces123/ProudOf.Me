const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require('../models/User');
const mongoose = require('mongoose');

import { connectDb } from '../utils/connectDb';

connectDb();

/*
    Serialization:
        - Used for sessions (auth session created / maintained via cookie in user's browser)
        - Here we are using the user's id to find the user 
*/
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        if (err) {
            throw err;
        }

        console.log('deserializing user', id);
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy(
        {
            // Options used for strategy
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: '/api/auth/redirect',
        },
        (accessToken, refreshToken, profile, done) => {
            // Check if user exists already
            User.findOne({ googleId: profile.id }).then((user) => {
                if (user) {
                    console.log('User Exists: ', user);
                    done(null, user);
                } else {
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
                            done(null, newUser);
                        })
                        .catch((err) => console.log(err));
                }
            });
        }
    )
);
