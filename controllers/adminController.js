// controllers/adminController.js
const Train = require('../models/train');

// Add a new train (admin only)
exports.addTrain = async (req, res) => {
    const { name, source, destination, totalSeats } = req.body;

    try {
        // Create new train
        const train = await Train.create({
            name,
            source,
            destination,
            totalSeats,
            availableSeats: totalSeats,
        });

        res.status(201).json({ train });
    } catch (error) {
        res.status(500).send('Server error');
    }
};
