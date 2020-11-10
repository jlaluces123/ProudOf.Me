export default async (req, res) => {
    console.log(req.query, req.method);
    res.json({ test: `From User ${req.query.userId}` });
};
