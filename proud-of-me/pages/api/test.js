import { connectDb } from '../../utils/connectDb';

connectDb();

export default async (req, res) => {
    res.send('Sanity Check: good');
};
