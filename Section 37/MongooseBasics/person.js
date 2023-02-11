const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/productApp')
  .then(() => {
    console.log('Connection Open!!!');
  })
  .catch(err => {
    console.log('Oh No Error!!!'); 
    console.log(err);
  });

const personSchema = new mongoose.Schema({
  first: String, 
  last: String
});

personSchema.virtual('fullName').get(function() {
  return `${this.first} ${this.last}`;
})

personSchema.pre('save', function() {
  console.log("ABOUT TO SAVE");
})

personSchema.post('save', function() {
  console.log("SAVED");
})

const Person = mongoose.model('Person', personSchema);