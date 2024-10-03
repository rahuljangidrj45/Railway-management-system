// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // Ensure authController is properly defined

// Define routes for user registration and login
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;  // Export the router instance
