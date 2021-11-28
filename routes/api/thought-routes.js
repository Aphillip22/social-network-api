const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    createThought,
    addReaction,
    updateThought,
    deleteThought,
    removeReaction
  } = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/thoughts
router
  .route('/')
  .get(getAllThought)
  .post(createThought);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

//set up POST and DELETE routes for reactions
router
  .route('/:thoughtId/reactions')
  .post(addReaction);

router
  .route("/:thoughtId/reactions/:reactionId")
  .delete(removeReaction);

module.exports = router;