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

module.exports = mongoose.model('Account', accountSchema)