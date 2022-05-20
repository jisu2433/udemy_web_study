const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'));

app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
})

app.use('/dogs', (req, res, next) => {
  console.log("I LOVE DOGS!")
  next();
})

const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === 'chickennugget') {
    next();
  }
  res.status(401)
  throw new AppError(401, 'Password required!')
}

app.get('/', (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`)
  res.send('HOME PAGE!')
})

app.get('/error', (req, res) => {

})
app.get('/dogs', verifyPassword, (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`)
  res.send('WOOF WOOF!')
})

app.get('/secret', (req, res) => {
  res.send('MY SECRET IS: Sometimes I wear headphones in public so I dont have to talk to anyone')
})

app.use((req, res) => {
  res.status(404).send('NOT FOUND!')
})

app.use((err, req, res, next) => {
  console.log("****************");
  console.log(err)
  next(err)
})

err 없이 next를 치면 내장 오류 핸들러가 작동하지 않음
app.listen(3000, () => {
  console.log('App is running on localhost:3000')
})