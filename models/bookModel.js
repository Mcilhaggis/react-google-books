const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: Array,
    required: true,
    default: [],
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  link: {
    type: String
  }
});
const Book = mongoose.model("books", bookSchema);
module.exports = Book;