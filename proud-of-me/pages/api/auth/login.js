export default async (req, res) => {
    res.render('login.js', { user: req.user });
};
