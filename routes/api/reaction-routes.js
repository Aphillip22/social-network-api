const router = require('express').Router();
const { addReaction, removeReaction } = require('../../controllers/reaction-controller');

//add reaction route to /api/reactions/<thoughtId>
router
  .route('/:thoughtId')
  .post(addReaction);

//remove reaction route at /api/reactions/<thoughtId>/<reactionId>
router
  .route('/:thoughtId/:reactionId')
  .delete(removeReaction);

module.exports = router;