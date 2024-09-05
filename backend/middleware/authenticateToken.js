const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/PriyaDb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

function authenticateToken(req, res, next) {
  // ... existing code ...
}

module.exports = authenticateToken;