import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Book from './Book'
import profileIcon from './user.png'
import axios from 'axios';
import cartIcon from './shopping_cart.png'
import orderIcon from './orders.png'


const AdminPage = () => {

    const [books, setBook] = useState([]);
    const [searchterm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
        
    useEffect(()=> {
        fetch('http://localhost:8080/lib/books/allbooks')
        .then(response => response.json())
        .then(data => setBook(data));

        console.log("hhhhhhhhhhhhhhhhhhh");
    },[])

    return (
        <div className="app">
            <h1> ESTO library Management </h1>
            <div>
             <img className='profileicon'
             src={profileIcon} 
             onClick={(e) => navigate('/profile')
            }
             />
            </div>
            <div>
             <img className='carticon'
             src={cartIcon} 
             onClick={(e) => navigate('/cart')
            }
             />
             </div>
             <div>
             <img className='ordericon'
             src={orderIcon} 
             onClick={(e) => navigate('/orders')
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
                    <h2> No books found </h2>
                    </div>
                )   
            }
            </div>
            
        </div>
    );
};

export default AdminPage;
