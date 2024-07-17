const express = require('express');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5002;

connectDB();

app.use(express.json());

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/thoughts', require('./routes/thoughtRoutes'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
