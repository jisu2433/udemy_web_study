const mongoose = require('mongoose');
const { stringify } = require('uuid');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/shopApp');
}

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    require: true,
    min: 0
  },
  onSale: {
    type: Boolean,
    default: false
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0
    },
    inStore: {
      type: Number,
      default: 0
    }
  }
});

// productSchema.methods.greet = function () {
//   console.log("HELLO!");
//   console.log(`- from ${this.name}`)
// }
// 화살표함수 쓰지마라

productSchema.methods.toggleOnSale = function () {
  this.onSale = !this.onSale;
  return this.save();
}

productSchema.methods.addCategory = function (newCat) {
  this.categories.push(newCat);
  return this.save;
}
// 여기서 this는 특정 Product 가리킴

// 정적 메서드 추가
productSchema.statics.fireSale = function () {
  return this.updateMany({}, { onSale: true, price: 0 })
}
//여기서 this는 모델 전체를 가리킴

const Product = mongoose.model('Product', productSchema);



const findProduct = async () => {
  const foundProduct = await Product.findOne({ name: 'Mountain Bike' });
  console.log(foundProduct)
  await foundProduct.toggleOnSale();
  console.log(foundProduct)
  await foundProduct.addCategory('Outdoors')
  console.log(foundProduct)
}
 
Product.fireSale().then(res => console.log(res))
//fireSale 전체적인 Product 모델이랑 관련
const bike = new Product({ name: 'Tire Pump', price: 20, categories: ['Cycling', 'Safety']})
bike.save()
  .then(data => {
    console.log("IT WORKED!")
    console.log(data);
  })
  .catch(err => {
    console.log("OH NO ERROR!")
    console.log(err)
  })
