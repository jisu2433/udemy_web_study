const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost:27017/relationshipDemo';
mongoose.connect(mongoDB);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

const userSchema = new mongoose.Schema({
  first: String,
  last: String,
  address: [
    {
      _id: { id:false },
      street: String,
      city: String,
      state: String,
      country: String
    }
  ]
})

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
  const u = new User({
    first: 'Harry',
    last: 'Potter'
  })
  u.addresses.push(
    {
    street: '123 Sesame St.',
    city: 'New York',
    state: 'NY',
    country: 'USA'
    }
  )
  const res = await u.save()
  console.log(res)
}

const addAddress = async (id) => {
  const user = await User.findById(id);
  user.addresses.push(
    {
      street: '99 vcase St.',
      city: 'New York',
      state: 'NY',
      country: 'USA'
      }
  )
  const res = await user.save()
  console.log(res);
}
makeUser();