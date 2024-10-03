// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateToken = require('../middleware/authMiddleware');

// Route for checking seat availability
router.post('/seats', authenticateToken, userController.getSeatAvailability);

// Route for booking a seat
router.post('/book', authenticateToken, userController.bookSeat);

module.exports = router;
