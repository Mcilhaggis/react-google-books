import React, { useState, useEffect } from 'react';
import BookResult from '../components/BookResult/BookResult';
import API from "../utils/API";

function Saved() {
    // Setting the state for the books original state
    const [books, setBooks] = useState([])

    // load all the books and store with loadbooks > setBooks
    useEffect(() => {
        loadBooks()
    }, [])

    //function to call the api to get all the saved books
    function loadBooks() {
        API.getBooks()
            .then(res =>
                setBooks(res.data)
            )
            .catch(err => console.log(err))
    }

    
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

    return ( <div className="container">
    {books.map(book => (
        <BookResult
        key={book._id}
        title={book.title}
        subtitle={book.subtitle}
        authors={book.authors}
        description={book.description}
        image={book.image}
        alt={book.title}
        viewLink={book.link}
        handleClick={() => deleteBook(book._id)}
        btnName={"DELETE"}

        />
        ))}
        </div>
    )
}

export default Saved;