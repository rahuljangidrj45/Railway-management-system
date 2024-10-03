const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user');
const Train = require('./train');

const Booking = sequelize.define('Booking', {
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        }
    },
    trainId: {
        type: DataTypes.INTEGER,
        references: {
            model: Train,
            key: 'id',
        }
    },
    seatNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Booking;
