const cookieSession = require('cookie-session');
const nc = require('next-connect');

export async function useCookie() {
    const handler = nc();

    handler.use(
        cookieSession({
            maxAge: 24 * 60 * 60 * 1000,
            keys: process.env.KEYS,
        })
    );

    return;
}
