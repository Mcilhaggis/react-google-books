import React, { useState } from 'react';
import axios from "axios"
import BookResult from "../components/BookResult/BookResult"
// import Form from '../components/Form'
import API from '../utils/API';
function Search() {
  //will accept what we type in the search field
  const [book, setBooks] = useState("");
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
        setResults(data.data.items);
      })
  }
  function handleSave(results) {
    console.log(results.volumeInfo)
    API.saveBook({
            title: results.volumeInfo.title,
            subtitle: results.volumeInfo.subtitle,
            authors: results.volumeInfo.authors,
            description: results.volumeInfo.description,
            image: results.volumeInfo.imageLinks.thumbnail,
            alt: results.volumeInfo.title,
            link: results.volumeInfo.infoLink
    })
  }
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
            image={item.volumeInfo.imageLinks !== undefined ? item.volumeInfo.imageLinks.thumbnail : ''}
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