const { Schema, model, Types } = require('mongoose');
const Thought = require('./Thought');

const UserSchema = new Schema({
    username: {
      type: String
    },
    email: {
      type: String
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false
  });

  // get total count of comments and replies on retrieval
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});
UserSchema.virtual('thoughtCount').get(function() {
  return this.thoughts.reduce((total, thought) => total + thought.reactions.length + 1, 0);
});

  // create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;