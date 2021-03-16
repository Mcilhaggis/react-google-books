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
                // console.log(res.data)
                setBooks(res.data)
            )
            .catch(err => console.log(err))
    }

console.log(books)
    return (
        <>
    {/* {books.map(book => {
        <BookResult
        key={book.volumeInfo.title}
        title={book.volumeInfo.title}
        subtitle={book.volumeInfo.subtitle}
        authors={book.volumeInfo.authors}
        description={book.volumeInfo.description}
        image={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''}
        alt={book.volumeInfo.title}
        />
    })} */}
        </>
    )
}

export default Saved;