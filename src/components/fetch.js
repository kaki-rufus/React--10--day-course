import React, { useState } from 'react'
import './style.css'

function Fetch(){

    const apiURL = 'https://anapioficeandfire.com/api/books'

    const [books, setBooks] = useState(null);

    function fetchBooks(){
        fetch(apiURL)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setBooks(data)
            })
    }

    return (
        <div className='fetch-me'>
            <div className='header'>
                <h1>Fetch a list from an API</h1>
            </div>

            {/* fetch data from API */}
            <div className='fetch-button'>
                <button type='submit' onClick={fetchBooks}>Fetch data</button>
            </div>

            {/* display data from API */}
            {/* use JSX below for each book */}

            <div className='books'>

            {books && books.map((book, index) =>(
                <div className='book' key={index}>
                    <h3>Book {index+1}</h3>
                    <h2>{book.name}</h2>

                    <div className='details'>
                        <p>Author/Authors</p>
                        <p>{book.numberOfPages}</p>
                        <p>{book.country}</p>
                        <p>{book.released}</p>
                    </div>
                </div>) )}
                
            </div>
        </div>
    );
}

export default Fetch;