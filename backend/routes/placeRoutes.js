const express = require('express');
const router = express.Router();
const Place = require('../models/placeModel');

// @desc    Get all heritage places
// @route   GET /api/places
// @access  Public
router.get('/', async (req, res) => {
    try {
        const places = await Place.find({});
        res.json(places);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;