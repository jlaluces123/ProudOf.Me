const passport = require('passport');
// CB Route for google redirect
/*
    - Once browser reaches here we recieve:
        1. Code in URL to use
            - We can use this code in exchange for information
        2. Fires Passport CB function
*/

// passport.authenticate('google');
// export default passport.authenticate('google');
// function runMiddleware(req, res, fn) {
//     return new Promise((resolve, reject) => {
//         fn(req, res, (result) => {
//             console.log('result: ', result);
//             if (result instanceof Error) {
//                 return reject(result);
//             }

//             return resolve(result);
//         });
//     });
// }

const handler = (req, res) => {
    res.send('Middleware working?');
};
