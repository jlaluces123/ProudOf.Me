import mongoose from 'mongoose';

const connection = {};

export async function connectDb() {
    if (connection.isConnected) return;

    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log('Connected Status: ', connection.isConnected);

    return [db, connection.isConnected];
}
