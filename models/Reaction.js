const { Schema, model, isValidObjectId } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
      type: Schema.Types.ObjectId,
      default: new ObjectId
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
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
      }
  });

  module.exports = reactionSchema;