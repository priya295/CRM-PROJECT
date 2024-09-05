const express = require('express');
const Superadmin = require('../models/superadmin'); // Ensure proper model import
const jwt = require('jsonwebtoken');

const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await Superadmin.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const user = new Superadmin({ username, email, password });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error("Registration Error: ", error);
    res.status(500).json({ message: 'Server error', error });
  }
});

// Login route
router.post('/superadmin_login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await Superadmin.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare passwords
    const isMatch = await user.comparePassword(password); // Compare password using the instance method
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate JWT
    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' }); // Replace 'your_jwt_secret' with your actual secret key

    res.status(200).json({ token });
  } catch (error) {
    console.error("Login Error: ", error);
    res.status(500).json({ message: 'Server error', error });
  }
});

// New route: Get all registered users
router.get('/superadmin', async (req, res) => {
  try {
    const users = await Superadmin.find({}, '-password'); // Exclude the password field

    res.status(200).json(users);
  } catch (error) {
    console.error("Get Users Error: ", error);
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
