const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use your routes
app.use(routes);


// Middleware to log requests
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});

app.use('/api', routes);

// Catch-all for unmatched routes
app.use((req, res, next) => {
  const error = new Error('Wrong route!');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  console.error(error.message);
  res.status(error.status || 500).json({
    message: error.message,
  });
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

db.on('error', (err) => {
  console.error('Mongoose connection error:', err.message);
});