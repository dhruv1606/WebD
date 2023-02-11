const express = require('express');
const app = express()

// app.use((req, res) => {
//   console.log("Hurray we got a new Request");
//   res.send('We Received Your Response!!!!!');
// })

app.get('/cats', (req, res) => {
  console.log('Got a Cat Request!!!');
  res.send('MEOW!!!');
})

app.get('/', (req, res) => {
  console.log('Homepage Request!!!');
  res.send('This is the homepage');
})

app.get('/dogs', (req, res) => {
  console.log('Got a Dog Request');
  res.send('WUFF!!!');
})

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Searching for ${subreddit} subreddit</h1>`);
})

app.get('/r/:subreddit/:postID', (req, res) => {
  const { subreddit, postID } = req.params;
  res.send(`<h1>Viewing postID ${postID} on ${subreddit} subreddit</h1>`);
})

app.get('/search', (req, res) => {
  const { q } = req.query;
  res.send(`<h1>Search results for: ${q}</h1>`);
})

app.listen(3000, () => {
  console.log('Listening on port 3000');
})