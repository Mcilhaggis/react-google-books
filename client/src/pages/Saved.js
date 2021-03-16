import React, {useState, useEffect} from 'react';
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


    return (
        <>
        
        </>
    )
}

export default Saved;