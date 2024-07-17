const mongoose = require('mongoose');
const User = require('../models/User');
const Thought = require('../models/Thought');
const { users, thoughts } = require('./data');

const seedDB = async () => {
  await mongoose.connect('mongodb://localhost:27017/socialNetwork');

  try {
    // Clear existing data
    await User.deleteMany({});
    await Thought.deleteMany({});

    // Insert users
    const createdUsers = await User.insertMany(users);
    
    // Map usernames to user IDs
    const userMap = createdUsers.reduce((map, user) => {
      map[user.username] = user._id;
      return map;
    }, {});

    // Map thoughts with user IDs and usernames
    const thoughtsWithUserIds = thoughts.map((thought) => ({
      ...thought,
      userId: userMap[thought.username], // Assign userId
    }));

    // Insert thoughts
    await Thought.insertMany(thoughtsWithUserIds);

    console.log('Database seeded successfully!');
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();
