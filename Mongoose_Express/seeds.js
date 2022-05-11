const mongoose = require('mongoose');
const Product = require('./models/product');

const { stringify } = require('uuid');

main().catch(err => { console.log(err); console.log("OH NO MONGO CONNECTION ERROR!!")});

async function main() {
  await mongoose.connect('mongodb://localhost:27017/farmStand');
}

// 개발을 위해서 웹 앱과 별개로 DB를 만드는 건 일반적인 일

// const p = new Product({
//   name: 'Ruby Grapefruit',
//   price: 1.99,
//   category: 'fruit'
// })
// p.save()
//   .then(p => {
//     console.log(p)
//   })
//   .catch(e => {
//     console.log(e)
//   })

const seedProduct = [
  {
    name: 'Fairy Eggplant',
    price: 1.00,
    category: 'vegetable'
  },
  { 
    name: 'Organic Goddess Melon',
    price: 4.99,
    category: 'fruit'
  },
  {
    name: 'Organic Mini Seedless Watermelon',
    price: 3.99,
    category: 'fruit'
  },
  {
    name: 'Organic Celery',
    price: 1.50,
    category: 'vegetable'
  },
  {
    name: 'Chocolate Whole Milk',
    price: 2.69,
    category: 'dairy'
  },
]
// 하나라도 유효성 검사를 통과하지 못하면 아무것도 삽입되지 않음
Product.insertMany(seedProduct)
  .then(res => {
    console.log("MONGO CONNECTION OPEN!")
  })
  .catch(e => {
    console.log("OH NO MONGO CONNECTION ERROR!")
  })