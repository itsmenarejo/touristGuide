const mongoose = require('mongoose');
const dotenv = require('dotenv');
const heritagePlaces = require('./data.js');
const Place = require('./models/placeModel.js');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('MongoDB Connected for data import...');
    importPlaces();
})
.catch(err => {
    console.error(`Error: ${err.message}`);
    process.exit(1);
});

const importPlaces = async () => {
    try {
        await Place.deleteMany();
        console.log('Existing places deleted.');

        await Place.insertMany(heritagePlaces);
        console.log('Data imported successfully!');

        process.exit();
    } catch (error) {
        console.error(`Error with data import: ${error.message}`);
        process.exit(1);
    }
};