const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');
console.log(redditData);

app.set('vew engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.render('home.ejs');
})

app.get('/rand', (req, res) => {
  const num = Math.floor(Math.random()*10) + 1;
  res.render('random.ejs', { num });
})

app.get('/cats', (req, res) => {
  let cats = ['Blue', 'Rocket', 'Monty', 'Stephenie', 'Winston'];
  res.render('cats.ejs',{ cats });
})

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  console.log(data);
  if(data) {
    res.render('subreddit.ejs', { ...data });
  } else {
    res.render('notFound.ejs', { subreddit });
  }
})

app.listen(3000, () => {
  console.log("Listening on Port 3000");
})