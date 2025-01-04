const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); // MongoDB connection
const userRoutes = require('./routes/userRoutes'); // User routes
const productRoutes = require('./routes/productRoutes'); // Product routes

// Initialize app
const app = express();

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use('/api/users', userRoutes); // User-related routes
app.use('/api/products', productRoutes); // Product-related routes

// Base route for testing
app.get('/', (req, res) => {
  res.send('Welcome to the Telecom Inventory Management System API');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
