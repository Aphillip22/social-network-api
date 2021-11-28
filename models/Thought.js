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
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false
  });

  // get total count of comments and replies on retrieval
ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

  // create the Thought model using the thoughtSchema
const Thought = model('Thought', ThoughtSchema);

// export the Thought model
module.exports = Thought;