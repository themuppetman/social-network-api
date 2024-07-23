const mongoose = require('mongoose');
const User = require('../models/User');
const Thought = require('../models/Thought');
const { users, thoughts, reactions } = require('./data');

const seedDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/socialNetwork');
    console.log('MongoDB connected');

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

    // Update users with friends' IDs
    for (let user of createdUsers) {
      const friendsWithIds = user.friends.map(friendUsername => userMap[friendUsername]);
      console.log(`Updating user ${user.username} with friends: `, friendsWithIds);
      await User.findByIdAndUpdate(user._id, { friends: friendsWithIds }, { new: true, runValidators: true });
    }

    // Map thoughts with user IDs and usernames
    const thoughtsWithUserIds = thoughts.map((thought) => ({
      thoughtText: thought.thoughtText,
      username: thought.username,
      userId: userMap[thought.username] // Assign userId
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