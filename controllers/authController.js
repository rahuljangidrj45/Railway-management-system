const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
require('dotenv').config();

// Register
exports.register = async (req, res) => {
    const { username, password } = req.body;

    // Check if user exists
    let user = await User.findOne({ where: { username } });
    if (user) return res.status(400).send('User already exists.');

    // Hash password and create user
    const hashedPassword = await bcrypt.hash(password, 10);
    user = await User.create({ username, password: hashedPassword });
    res.status(201).send('User registered.');
};

// Login
exports.login = async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(400).send('User not found.');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Invalid password.');

    // Create JWT
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
    res.json({ token });
};
