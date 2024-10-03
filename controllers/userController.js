// controllers/userController.js
const Train = require('../models/train');
const Booking = require('../models/booking');
const User = require('../models/user');

// Get seat availability
exports.getSeatAvailability = async (req, res) => {
    const { source, destination } = req.body;

    try {
        // Find trains matching the route
        const trains = await Train.findAll({
            where: { source, destination },
        });

        res.json({ trains });
    } catch (error) {
        res.status(500).send('Server error');
    }
};

// Book a seat
exports.bookSeat = async (req, res) => {
    const { trainId } = req.body;
    const userId = req.user.id;

    try {
        // Find the train by ID
        const train = await Train.findByPk(trainId);
        if (!train) return res.status(404).send('Train not found.');

        // Check if seats are available
        if (train.availableSeats <= 0) return res.status(400).send('No seats available.');

        // Decrement available seats
        train.availableSeats -= 1;
        await train.save();

        // Create a booking
        const booking = await Booking.create({
            userId,
            trainId,
            seatNumber: train.totalSeats - train.availableSeats,  // Assign seat number
        });

        res.status(201).json({ booking });
    } catch (error) {
        res.status(500).send('Server error');
    }
};
