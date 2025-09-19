const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const profileRoutes = require('./routes/profileRoutes.js');
const placeRoutes = require('./routes/placeRoutes.js');
const path = require('path');

// loading Environment variable 
dotenv.config();

// Connecting to the DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.error('MongoDB Connection Error:', err));

const app = express();

// Middleware
app.use(cors()); // Allows your React frontend to communicate with this backend
app.use(express.json()); // Allows the server to accept JSON in the request body
app.use(express.static(path.join(__dirname, 'public')));

// API Routes 
app.use('/api/users', userRoutes); // All user-related routes will start with /api/Users
app.use('/api/profile', profileRoutes); // All profile-related routes will start with /api/profile
app.use('/api/places', placeRoutes); // All places-related routes will start with /api/places

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});