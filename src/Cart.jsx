import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [items, setItems] = useState([]);
  const token = localStorage.getItem('token');
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCart = async () => {
     // Retrieve JWT token from local storage
      console.log(token);
      try {
        const response = await axios.get('http://localhost:8080/lib/user/mycart', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setItems(response.data);
        console.log(items);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCart();
  }, []);


  const removeItem = async (id) => {
    console.log(token);
    try {
      axios.delete(`http://localhost:8080/lib/user/delete/book/cart/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        } 
      } ,
      {id});
    } catch (error) {
      console.error(error);
    }
  };

  // const exit = () => {
  //   return navigate('/home');
  //  }


  return (
    <div>
      <h1>Votre Panier</h1>
     <div>
             <CloseIcon fontSize='large' className='exiticon' 
             onClick={(e) => navigate('/home')}
             />
      </div>
            {
                items?.length > 0
                ?(
                  <div className="container">
                     {items.map((item) => (
                     <div className="book" key={item.id}>
                      <div>
                        <h3>{item.isbn}</h3>
                    </div>
                    <div>
                           <img  src={item.cover !== null ? item.cover : 'https://via.placeholder.com/400'}/>
                    </div>
                    <div>
                        <button onClick={() => removeItem(item.id)} className="form-control" > Remove from cart </button>
                    </div>
                     
                  </div>
                     ))}
                  </div>
                ) : ( 
                    <div className="empty"> 
                    <h2> you're cart is empty  </h2>
                    </div>
                )   
            }
            </div>
    
  );
};

export default Cart;

















//       /delete/book/cart/{id}