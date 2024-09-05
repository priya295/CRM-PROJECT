const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Superadminauth = require('./routes/superadmin');
const package = require('./routes/package');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
app.use(cors());
app.use(express.json());

// Use environment variable for the MongoDB connection string
const uri = "mongodb://127.0.0.1:27017"; // Use IPv4 localhost

// Connect to MongoDB using Mongoose
mongoose.connect(uri, { 
  dbName: "PriyaDb",  // Specify the database name here
  useNewUrlParser: true, // These options are often used to ensure compatibility
  useUnifiedTopology: true,
  connectTimeoutMS: 4000 // Set connection timeout to 4 seconds
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/superadmin', Superadminauth);
app.use('/package', package);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
