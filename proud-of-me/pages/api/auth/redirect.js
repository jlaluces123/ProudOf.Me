const passport = require('passport');
const passportConfig = require('../../../config/passport');
const nc = require('next-connect');
// CB Route for google redirect
/*
    - Once browser reaches here we recieve:
        1. Code in URL to use
            - We can use this code in exchange for information
        2. Fires Passport CB function
*/

const handler = nc();

handler.use(passport.initialize());

handler.get(passport.authenticate('google'), (req, res) => {
    res.send('Working Now?');
});

export default handler;
