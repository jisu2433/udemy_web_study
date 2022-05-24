const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const { stringify } = require('uuid');
const AppError = require('./AppError')

const Product = require('./models/product');

main().catch(err => { console.log(err); console.log("OH NO MONGO CONNECTION ERROR!!")});

async function main() {
  await mongoose.connect('mongodb://localhost:27017/farmStand2');
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const categories = ['fruit', 'vegetable', 'dairy'];

app.get('/products', async (req, res) => {
  const { category } = req.query;
  if (category) {
    const products = await Product.find({ category })
    res.render('products/index', {products, category})
  } else {
    const products = await Product.find({})
    res.render('products/index', {products, category:'All'})
  }
})

app.get('/products/new', (req, res) => {
  res.render('products/new', { categories })
})

app.post('/products', wrapAsync(async (req, res, next) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
  // 계속 요청보내는 거 막기위해서
}))

function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch(e => next(e))
  }
}

app.get('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    if (!product) {
      throw new AppError('Product Not Found', 404);
    }
    res.render('products/show', { product })
}))

app.get('/products/:id/edit', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      throw (new AppError('Product Not Found', 404));
    }
    res.render('products/edit', { product, categories })
}))

app.put('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${product._id}`);
}))

app.delete('/products/:id', wrapAsync(async (req, res) => {
  const { id } = req.params;
  const deleteProduct = await Product.findByIdAndDelete(id);
  res.redirect('/products');
}))

const handleValidationErr = err => {
  console.dir(err);
  return new AppError(`Validation Failed...${err.message}`, 400)
}

app.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name === 'ValidationError') err = handleValidationErr(err)
  next(err);
})

app.use((err, req, res, next) => {
  const { status = 500, message = 'Something went wrong' } = err;
  res.status(status).send(message);
})

// Express가 첫 매개변수인 err를 오류 처리 미들웨어로 취급

app.listen(3000, () => {
  console.log("APP IS LISTENING ON PORT 3000!")
})