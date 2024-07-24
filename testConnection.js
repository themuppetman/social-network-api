const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/testDatabase';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Connection error', err.message);
  });

mongoose.connection.on('error', err => {
  console.error('Mongoose connection error:', err.message);
});

mongoose.connection.once('open', () => {
  console.log('Mongoose connected to the database');
});