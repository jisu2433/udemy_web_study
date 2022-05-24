const mongoose = require('mongoose');
const { Schema } = mongoose;

const mongoDB = 'mongodb://localhost:27017/relationshipDemo';
mongoose.connect(mongoDB);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

const userSchema = new Schema({
  username: String,
  age: Number
})

const tweetSchema = new Schema({
  text: String,
  likes: Number,
  user: { type: Schema.Types.ObjectId, ref: 'User' }
})

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

const makeTweets = async () => {
  const user = new User({ username: 'chickenfan99', age: 61 });
  const tweet1 = new Tweet({ text: 'omg I love my chicken famaiy!', likes: 0 })
  tweet1.user = user;
  user.save();
  tweet1.save();
}

makeTweets(); 