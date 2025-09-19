const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Helper function to create a token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// Sign Up a New User
const signUpUser = async (req, res) => {
    const { firstName, lastName, email, securityPin } = req.body;

    try {
        // Checking if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({success: false, message: 'User already exists' });
        }

        // // Hashing the Security Pin to Secured Authentication
        // const hashedPin = await bcrypt.hash(securityPin, 10);
        
        // Creating a new user (password will be hashed by the model)
        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password: securityPin,
        });

        // await newUser.save();
        
        // User is Created successfully or not
        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: {
                id: newUser._id,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
            },
        });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};


// Login an Existing user
const loginUser = async (req, res) => {
    const { email, securityPin } = req.body;

    try {
        // 1. Checking if user with that email exists
        const user = await User.findOne({ email });

        // 2. If user exists, compare the provided ssecurity pin with hased pin
        if (user && (await bcrypt.compare(securityPin, user.password))) {
            // 3. If they match, send back user data and a new token
            res.status(200).json({
                _id: user._id,
                name: `${user.firstName} ${user.lastName}`,
                email: user.email,
                token: generateToken(user._id), // The token is the key to the session
            });
        } else {
            // If user not found or passwords don't match, send an error
            res.status(401).json({ message: 'Invalid email or PIN' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

//Get user Profile (Protected)
const getUserProfile = async (req, res) => {
    if(req.user){
        res.json({
            _id: req.user._id,
            firstName: req.user.firstName,
            lastName: req.user.lastName,
            email: req.user.email,
        });
    }else{
        res.status(404).json({ message: 'User not found' });
    }
};
//other functions here(furture implementation)

module.exports = { signUpUser, loginUser, getUserProfile };