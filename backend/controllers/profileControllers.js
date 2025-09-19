// controllers/profileControllers.js
const Profile = require('../models/profileModel');

// @desc    Create or Update user profile
// @route   POST /api/profile
// @access  Private
const createOrUpdateProfile = async (req, res) => {
    const { phone, age, gender, hometown, interests } = req.body;
    const user = req.user.id; // User ID from the protect middleware

    const profileFields = {
        user,
        phone,
        age,
        gender,
        hometown,
        interests
    };

    try {
        let profile = await Profile.findOne({ user });

        if (profile) {
            // If profile exists, update it
            profile = await Profile.findOneAndUpdate(
                { user },
                { $set: profileFields },
                { new: true }
            );
            return res.json(profile);
        }

        // If no profile exists, create a new one
        profile = new Profile(profileFields);
        await profile.save();
        res.status(201).json(profile);

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

// @desc    Get user profile
// @route   GET /api/profile
// @access  Private
const getProfile = async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['firstName', 'lastName', 'email']);
        
        if (!profile) {
            return res.status(404).json({ msg: 'Profile not found' });
        }
        res.json(profile);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

module.exports = { createOrUpdateProfile, getProfile };