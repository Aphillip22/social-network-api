const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
      type: String,
      require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
      },
    username: {
      type: String,
      require: true
    },
    reactions: []
  });

  // create the Thought model using the thoughtSchema
const Thought = model('Thought', ThoughtSchema);

// export the Thought model
module.exports = Thought;