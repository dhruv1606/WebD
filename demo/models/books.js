const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
  title: String,
  price: String,
  descripition: String,
  author: String
})

module.exports(mongoose.model('Books', BooksSchema));