const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
  authors: {
    type: [String]
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  alt: {
    type: String,
  },
  link: {
    type: String,
  }

});
const Book = mongoose.model("books", bookSchema);
module.exports = Book;