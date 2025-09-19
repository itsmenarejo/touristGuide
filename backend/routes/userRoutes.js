const express = require('express');
const router = express.Router();
const { signUpUser, loginUser, getUserProfile } = require('../controllers/userControllers');
const { protect } = require('../middleware/authMiddleware'); 

// signup function, route
router.post('/signup', signUpUser);

// login function, route
router.post('/login', loginUser);

// Protected route
router.get('/profile', protect, getUserProfile);

module.exports = router;