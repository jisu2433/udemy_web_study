const mongoose = require('mongoose');
const { stringify } = require('uuid');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String
})

const Movie = mongoose.model('Movie', movieSchema)
// 집합 이름은 movies고 모델 이름은 Movie
// const amadeus = new Movie({ title: 'Amadeus', year: 1996, score: 9.3, rating: 'R' })

Movie.insertMany([
  { title: 'Amelie', year: 2001, score: 8.5, rating: 'R' },
  { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
  { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
  { title: 'Stand By Me', year: 1986, score: 8.5, rating: 'R' },
  { title: 'Moonrise Kingdom', year: 2012, score: 7.5, rating: 'PG-13' },
])
  .then(data => {
    console.log("IT WORKED!")
    console.log(data);
  })

