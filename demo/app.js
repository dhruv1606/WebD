const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('Server on port 3000');
})

const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
	res.render('home');
})

mongoose.connect('mongodb://localhost:27017/demo', {
	useCreateIndex : true,
	useUnifiedTopology : true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("once", () => {
	console.log("Database connected");
})

const book = require('./models/books.js');

app.get('/createbook', async (req, res) => {
	const newBook = new campground({title: 'The Alchemist', description: 'Follow your passions', author: 'Paolo Coelho'});
	await book.save();
	res.send(book);
});