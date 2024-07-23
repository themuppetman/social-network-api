const Thought = require('../models/Thought');

const createThought = async (req, res) => {
  try {
    const thought = await Thought.create(req.body);
    res.status(201).json(thought);
  } catch (err) {
    console.error('Error creating thought:', err);
    res.status(400).json({ message: 'Error creating thought', error: err });
  }
};

const getAllThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    console.error('Error fetching thoughts:', err);
    res.status(500).json({ message: 'Error fetching thoughts', error: err });
  }
};

const getThoughtById = async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.id);
    if (!thought) return res.status(404).json({ message: 'Thought not found' });
    res.json(thought);
  } catch (err) {
    console.error('Error fetching thought by ID:', err);
    res.status(500).json({ message: 'Error fetching thought by ID', error: err });
  }
};

const updateThought = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(req .params.id  , req.body  , { new: true });   
    if (!thought) return res.status(404).json({ message: 'Thought not found' });
    res.json(thought);
  } catch (err) {
    console.error('Error updating thought:', err);
    res.status(400).json({ message: 'Error updating thought', error: err });
  }
};

const deleteThought = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndDelete(req.params.id);
    if (!thought) return res.status(404).json({ message: 'Thought not found' });
    res.json({ message: 'Thought deleted' });
  } catch (err) {
    console.error('Error deleting thought:', err);
    res.status(500).json({ message: 'Error deleting thought', error: err });
  }
};


module.exports = {
  createThought,
  getAllThoughts,
  getThoughtById,
  updateThought,
  deleteThought,
};