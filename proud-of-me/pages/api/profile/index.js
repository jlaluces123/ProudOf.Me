const cookieSession = require('cookie-session');
const nc = require('next-connect');
const passport = require('passport');
// CB Route for google redirect
/*
    - Once browser reaches here we recieve:
        1. Code in URL to use
            - We can use this code in exchange for information
        2. Fires Passport CB function
*/

// export default async (req, res) => {
//     res.send('Welcome: ');
//     console.log('User');
// };

const handler = nc();

handler.use(
    cookieSession({
        maxAge: 24 * 60 * 60 * 1000,
        keys: [process.env.KEYS],
    })
);

handler.use(passport.initialize());
handler.use(passport.session());

handler.get((req, res) => {
    res.send(`Welcome ${req.user.username}`);
});

export default handler;
