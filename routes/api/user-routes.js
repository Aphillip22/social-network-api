const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    removeThought
  } = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser)
  .delete(removeThought);

// Set up POST and DELETE routes for user friends at /api/users/:userId/friends/:friendId
router
.route("/:userId/friends/:friendId")
.post(addFriend)
.delete(removeFriend);

module.exports = router;