import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Book from './Book'
import profileIcon from './user.png'
import jwtDecode from 'jwt-decode';
import Profile from './Profile';


function Home () {
    const [books, setBook] = useState([]);
    const [searchterm, setSearchTerm] = useState('');
    const navigate = useNavigate();
        
    useEffect(()=> {
        fetch('http://localhost:8080/lib/books/allbooks')
        .then(response => response.json())
        .then(data => setBook(data));

        console.log("hhhhhhhhhhhhhhhhhhh");
    },[])

    return (
        <div className="app">
            <h1> ESTO library </h1>
            <div>
             <img className='profileicon'
             src={profileIcon}
             onClick={navigate('/profile')
            }
             />
            </div>
            <div>
            {
                books?.length > 0
                ?(
                  <div className="container">
                     {books.map((book) => (
                     <Book book={book} key={book.id} />
                     ))}
                  </div>
                ) : (
                    <div className="empty"> 
                    <h2> No movies found </h2>
                    </div>
                )   
            }
             </div>
            
        </div>
    );
};

export default Home;
