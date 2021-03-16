import React, { useState } from 'react';
import axios from "axios"
import BookResult from "../components/BookResult/BookResult"

// import Form from '../components/Form'
import API from '../utils/API';

function Search() {

  //will accept what we type in the search field
  const [book, setBooks] = useState("");
  //will store the book data that is clicked
  const [currentBook, setCurrentBook] = useState({})
  //this will hold the response from the api 
  const [results, setResults] = useState([])

  const API_KEY = "AIzaSyAdTBuVAEcE5cncQwnLmSTT4JcDGQW2nKk";

  function handleChange(e) {
    const book = e.target.value;
    setBooks(book)
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + API_KEY + "&maxResults=40")
      .then(data => {
        console.log(data.data.items);
        setResults(data.data.items);
      })
  }

  function handleSave(book) {
    console.log(book.volumeInfo.infoLink)
    setCurrentBook({
            title: book.volumeInfo.title,
            subtitle: book.volumeInfo.subtitle,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : '',
            alt: book.volumeInfo.title,
            link: book.volumeInfo.infoLink
    })
    API.saveBook(currentBook)
  }

  return (
    <div>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input onChange={handleChange} type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
              aria-describedby="search-addon" />
            <button type="submit" value='Search' className="btn btn-outline-primary">search</button>
          </div>
        </form>
      </div>
      <div className='container'>
        {results.map(book => (
          <BookResult
            key={book.id}
            title={book.volumeInfo.title}
            subtitle={book.volumeInfo.subtitle}
            authors={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            image={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''}
            alt={book.volumeInfo.title}
            viewLink={book.volumeInfo.infoLink}
            handleClick={() => handleSave(book)
            }
            btnName={"SAVE"}

          />
          
        ))}
      </div>
    </div>
  )
};

export default Search;