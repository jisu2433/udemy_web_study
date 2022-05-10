const mongoose = require('mongoose');
const { stringify } = require('uuid');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/shopApp');
}

const personSchema = new mongoose.Schema({
  first: String,
  last: String
})

personSchema.virtual('fullName').get(function () {
  return `${this.first} ${this.last}`
})

// 두 개의 미들웨어 함수
personSchema.pre('save', async function () {
  console.log("ABOUT TO SAVE!")
})

personSchema.pre('save', async function () {
  console.log("JUST SAVED!")
})

const Person = mongoose.model('Person', personSchema);