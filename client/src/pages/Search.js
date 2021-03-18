import React, { useState } from 'react';
import axios from "axios"
import BookResult from "../components/BookResult/BookResult"

// import Form from '../components/Form'
import API from '../utils/API';

function Search() {

  //will accept what we type in the search field
  const [book, setBooks] = useState("");
  //will store the book data that is clicked
  // const [currentBook, setCurrentBook] = useState([])
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
        // console.log(data.data.items);
        setResults(data.data.items);
      })
      // console.log(results)
      // console.log(currentBook)
  }

  function handleSave(results) {
    console.log(results)
    // console.log(results)
    // const { volumeInfo } = results.filter(book => book.id === id)[0]

    // setCurrentBook({
    //         title: book.volumeInfo.title,
    //         subtitle: book.volumeInfo.subtitle,
    //         authors: book.volumeInfo.authors,
    //         description: book.volumeInfo.description,
    //         image: book.volumeInfo.imageLinks,
    //         alt: book.volumeInfo.title,
    //         link: book.volumeInfo.infoLink
    // })
    API.saveBook({
              title: results.volumeInfo.title,
            subtitle: results.volumeInfo.subtitle,
            authors: results.volumeInfo.authors,
            description: results.volumeInfo.description,
            // image: results.volumeInfo.imageLinks.thumbnail,
            alt: results.volumeInfo.title,
            link: results.volumeInfo.infoLink
    })
    // console.log(currentBook)
    // console.log(results)
    
  }
  // console.log(book)

  return (
    <div>
      <div className='container mt-5 p-5 border'>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input onChange={handleChange} type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
              aria-describedby="search-addon" />
            <button type="submit" value='Search' className="btn btn-outline-primary">SEARCH</button>
          </div>
        </form>
      </div>
      <div className='container'>
        {results.map(item => (
          <BookResult
            key={item.id}
            title={item.volumeInfo.title}
            subtitle={item.volumeInfo.subtitle}
            authors={item.volumeInfo.authors}
            description={item.volumeInfo.description}
            // image={item.volumeInfo.imageLinks.thumbnail}
            alt={item.volumeInfo.title}
            viewLink={item.volumeInfo.infoLink}
            handleClick={() => handleSave(item)
            }
            btnName={"SAVE"}

          />
          
        ))}
      </div>
    </div>
  )
};

export default Search;