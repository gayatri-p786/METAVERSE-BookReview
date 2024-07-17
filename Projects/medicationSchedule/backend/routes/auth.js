// Import necessary modules
const express = require('express');
const router = express.Router();
const User = require('../models/users'); // Import the User model

// Route to handle sign-up
router.post('/signup', async (req, res) => {
  const { firstName, lastName, email, password, phoneNumber, address } = req.body;

  try {
    // Check if the email already exists in the database
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Create a new user instance using the User model
    const newUser = new User({
      firstName,
      lastName,
      email,
      password, // Note: You should hash the password before saving to the database for security
      phoneNumber,
      address,
    });

    // Save the new user to the database
    await newUser.save();

    // Optionally, you can omit sensitive data like password before sending response
    const { password: _, ...savedUser } = newUser.toObject();

    res.status(201).json(savedUser); // Respond with the saved user data
  } catch (error) {
    console.error('Error signing up:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
