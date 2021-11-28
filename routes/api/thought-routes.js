const router = require("express").Router();

const { 
    getAllThought, 
    getThoughtById, 
    addThought, 
    updateThought, 
    removeThought, 
    addReaction, 
    removeReaction 
} = require("../../controllers/thought-controller");

// add GET all and POST thought routes to /api/thoughts/
router
.route("/")
.get(getAllThought)
.post(addThought);

// add GET, PUT (update) and DELETE by ID routes to /api/thoughts/:id
router
.route("/:thoughtId")
.get(getThoughtById)
.put(updateThought)
.delete(removeThought);

//set POST reaction route to /api/thoughts/:thoughtId/reactions
router
.route("/:thoughtId/reactions")
.post(addReaction);

//set DEL reaction route to /api/thoughts/:thoughtId/reactions
router
.route("/:thoughtId/reactions/:reactionId")
.delete(removeReaction);

module.exports = router;