// models/profileModel.js
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User', // Links this profile document to a User document
        unique: true, // Ensures each user has only one profile(Avoiding Duplicates)
    },
    phone: { type: String },
    age: { type: String },
    gender: { type: String },
    hometown: { type: String },
    interests: { type: String },
}, {
    timestamps: true
});

module.exports = mongoose.model('Profile', profileSchema);