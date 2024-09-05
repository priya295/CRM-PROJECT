const express = require('express');
const Package = require('../models/package'); // Import the package model

const router = express.Router();

// Create a new package
router.post('/create_package', async (req, res) => {
  try {
    const {
      packageName,
      packageNo,
      numOfProjects,
      numOfUsers,
      storageUnit,
      storageUnitType,
      planType,
      tenure,
      months,
      description,
      modules
    } = req.body;

    // Create a new package
    const newPackage = new Package({
      packageName,
      packageNo,
      numOfProjects,
      numOfUsers,
      storageUnit,
      storageUnitType, // Ensure this is included
      planType,
      tenure,
      months,
      description,
      modules
    });

    await newPackage.save();

    res.status(201).json({ message: 'Package created successfully', newPackage });
  } catch (error) {
    console.error('Create Package Error:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
