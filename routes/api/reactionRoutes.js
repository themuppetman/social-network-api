const router = require('express').Router();
const {
  getAllReactions,
  getReactionById,
  createReaction,
  deleteReaction,
} = require('../../controllers/reactionController');

router.route('/').get(getAllReactions).post(createReaction);
router.route('/:id').get(getReactionById).delete(deleteReaction);
router.route('/:thoughtId/reactions').post(createReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;