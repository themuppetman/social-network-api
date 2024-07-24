const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/socialNetwork', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.error('Connection error', err.message);
  });

mongoose.connection.on('error', err => {
  console.error('Mongoose connection error:', err.message);
});

module.exports = mongoose.connection;