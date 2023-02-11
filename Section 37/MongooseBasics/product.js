const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/productApp')
  .then(() => {
    console.log('Connection Open!!!');
  })
  .catch(err => {
    console.log('Oh No Error!!!'); 
    console.log(err);
  });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }, 
  price: {
    type: Number,
    default: 0,
    min: 0
  },
  onSale: {
    type: Boolean,
    default: false
  },
  qty: {
    online: {
      type: Number,
      default: 0
    },
    inStore: {
      type: Number,
      default: 0
    }
  },
  categories: [String]
});

productSchema.methods.greet = function() {
  console.log("Hiiii!!!!!!");
  console.log(`Hello from ${this.name}`);
}

productSchema.methods.addCategory = function(newCategory) {
  this.categories.push(newCategory);
  return this.save();
}

productSchema.methods.toggleOnSale = function () {
  this.onSale = !this.onSale;
  return this.save();
}

productSchema.statics.fireSale = function() {
  return this.updateMany({}, {price: 0, onSale: true});
}

const Product = mongoose.model('Product', productSchema);


const findProduct = async () => {
  const foundProduct = await Product.findOne({name: 'Harley'});
  console.log(foundProduct);
  await foundProduct.toggleOnSale();
  console.log(foundProduct);
  await foundProduct.addCategory('Blue');
  console.log(foundProduct);
}

//findProduct();
Product.fireSale().then(res => console.log(res));

// const Bike = new Product({name: 'Tire pump', price: 19.50, categories: ['Cycling']});
// Bike.save()
//   .then(data=> {
//     console.log("It Worked!!!");
//     console.log(data);
//   })
//   .catch(err => {
//     console.log('Oh No, Error!!!');
//     console.log(err);
//   });

// Product.findOneAndUpdate({name: 'Tire Pump'}, {price: -10.99}, {new: true, runValidators: true})
//   .then(data=> {
//     console.log("It Worked!!!");
//     console.log(data);
//   })
//   .catch(err => {
//     console.log('Oh No, Error!!!');
//     console.log(err);
//   });

