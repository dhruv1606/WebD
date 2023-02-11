const express = require('express');
const app = express();
const morgan = require('morgan');

// app.use(morgan('tiny'));
// app.use((req, res, next) => {
//   console.log('this is first middleware');
//   next();
//   console.log('this is third middleware');
// })

// app.use((req, res, next) => {
//   console.log('this is second middleware');
//   next();
// })

const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if(password === 'password') {
    next();
  }
  res.status(404).send('Password Required');
}



app.use('/dogs', (req, res, next) => {
  console.log('Dogs requested');
  next();
})

app.get('/', (req, res) => {
  res.send('Homepage');
})

app.get('/secret', verifyPassword, (req, res) => {
  res.send('My secret is : I love my me-time although I am an extrovert')
})

app.get('/dogs', (req, res) => {
  res.send('WOOF WOOF!');
})

app.use((err, req, res, next) => {
  console.log('Error!');
  res.status(404).send("Error");
})

app.get('/admin', (req, res) => {
  throw new AppError("You are now an Admin", 403);
})

app.listen(3000, () => {
  console.log('Port 3000 Open');
})
