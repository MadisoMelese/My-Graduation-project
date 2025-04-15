const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin');
const connectDB = require('./db');

const createAdmin = async () => {
    await connectDB();

    const existingAdmin = await Admin.findOne({ email: 'admin@example.com' });
    if (!existingAdmin) {
        const hashedPassword = await bcrypt.hash('admin123', 10); // Hash the password
        const newAdmin = new Admin({ email: 'admin@example.com', password: hashedPassword });
        await newAdmin.save();
        console.log('Admin account created.');
    } else {
        console.log('Admin already exists.');
    }

    mongoose.connection.close();
};

createAdmin();
