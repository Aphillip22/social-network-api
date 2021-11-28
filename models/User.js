const { Schema, model, Types } = require('mongoose');
const Thought = require('./Thought');

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address'],
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

//Bonus - reviewed github repo at https://github.com/njthanhtrang/18.-NoSQL-Challenge-Social-Network-API/blob/main/models/User.js
UserSchema.pre("findOneAndDelete", { document: false, query: true }, async function() {
  console.log("User pre-delete");
  const doc = await this.model.findOne(this.getFilter());
  console.log(doc.username);
  await Thought.deleteMany({ username: doc.username });
});

  // create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;