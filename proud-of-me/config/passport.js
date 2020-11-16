const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

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
        }
    )
);
