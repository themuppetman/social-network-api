const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/api/userRoutes');
const friendRoutes = require('./routes/api/friendsRoutes');

const app = express();

app.use(express.json());

// Use the routes
app.use('/users', userRoutes);
app.use('/friends', friendRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/socialNetwork')
  .then(() => {
    console.log('MongoDB connected');
    app.listen(3001, () => {
      console.log('Server is running on port 3001');
    });
  })
  .catch(err => {
    console.error('Connection error', err);
  });