const mongoose = require('mongoose');
const User = require('./User');

const AccomplishmentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    title: {
        type: String,
        required: [true, 'Please Enter A Title'],
    },
    story: {
        type: String,
        required: [true, 'Please Tell Your Story'],
    },
});

module.exports =
    mongoose.models.Accomplishment ||
    mongoose.model('Accomplishment', AccomplishmentSchema);
