const express = require('express');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');  // Ensure this is correctly imported
const adminRoutes = require('./routes/adminRoutes');  // Ensure this is correctly imported
const userRoutes = require('./routes/userRoutes');  // Ensure this is correctly imported

const app = express();
require('dotenv').config();

app.use(express.json());  // Middleware to parse JSON

// Routes
app.use('/auth', authRoutes);  // Correct usage of middleware
app.use('/admin', adminRoutes);  // Correct usage of middleware
app.use('/user', userRoutes);  // Correct usage of middleware

// Start the server after syncing models
sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server running on port 3000');
    });
});
