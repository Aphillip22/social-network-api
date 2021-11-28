const router = require("express").Router();

const { 
    getAllThought, 
    getThoughtById, 
    addThought, 
    updateThought, 
    removeThought, 
    addReaction, 
    removeReaction,
} = require("../../controllers/thought-controller");

//set GET and POST routes for all thoughts and add thought to /api/thoughts/
router
.route("/")
.get(getAllThought)
.post(addThought);

//set GET, PUT and DELETE routes by thoughtId to /api/thoughts/:id
router
.route("/:thoughtId")
.get(getThoughtById)
.put(updateThought)
.delete(removeThought);

//set POST route for reactions to /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions")
.post(addReaction);

//set DELETE route for reactions to /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions/:reactionId")
.delete(removeReaction);

module.exports = router;