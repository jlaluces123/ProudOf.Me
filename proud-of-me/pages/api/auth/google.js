const passport = require('passport');
const passportConfig = require('../../../config/passport');

// Login Service
export default passport.authenticate('google', {
    scope: ['profile'],
});
