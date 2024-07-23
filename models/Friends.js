const mongoose = require('mongoose');

const friendSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  friend: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Friend = mongoose.model('Friends', friendSchema);

module.exports = Friends;