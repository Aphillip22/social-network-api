const { Schema, model, isValidObjectId } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
      type: Object,
      default: new isValidObjectId
    },
    reactionBody: {
      type: String,
      required: true,

    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
      }
  });