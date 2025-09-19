// routes/profileRoutes.js
const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { createOrUpdateProfile, getProfile } = require('../controllers/profileControllers');

router.post('/', protect, createOrUpdateProfile);
router.get('/', protect, getProfile);

module.exports = router;