const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
    },
    mantra: {
        type: String,
    },
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
