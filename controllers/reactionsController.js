const { Thought, Reaction } = require('../models');

const addReaction = async (req, res) => {
  try {
    const reaction = await Reaction.create(req.body);
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $push: { reactions: reaction._id } },
      { new: true }
    );
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.status(201).json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
};

const removeReaction = async (req, res) => {
  try {
    const reaction = await Reaction.findByIdAndDelete(req.params.reactionId);
    if (!reaction) {
      return res.status(404).json({ message: 'Reaction not found' });
    }
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $pull: { reactions: req.params.reactionId } },
      { new: true }
    );
    res.status(200).json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  addReaction,
  removeReaction,
};