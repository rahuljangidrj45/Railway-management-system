// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authenticateToken = require('../middleware/authMiddleware');
const verifyAdmin = require('../middleware/adminMiddleware');
const verifyApiKey = require('../middleware/apiKeyMiddleware');

// Admin route for adding a train (protected by API key)
router.post('/train', verifyApiKey, authenticateToken, verifyAdmin, adminController.addTrain);

module.exports = router;
