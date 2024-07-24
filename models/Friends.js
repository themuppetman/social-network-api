const { Schema, model } = require('mongoose');

const friendSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  friendId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Friend = model('Friend', friendSchema);

module.exports = Friend;