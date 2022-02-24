const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  books: {
    type: Array,
    required: true,
  }
});

// accountSchema.methods.addBook = async function (){
//   const book = this.books.filter(b=>b.title === 'Scream 2022')
//   book.status = 'reading';
//   console.log(book)
//   // console.log(this.books)
// }

module.exports = mongoose.model('Account', accountSchema)