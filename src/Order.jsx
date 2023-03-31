import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect , useState } from "react";
import exitbutton from './exit.png'
import { Button } from "bootstrap";


const Order = () =>{
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

  const submitOrder = async () => {
    console.log(token);
    try {
        const response = await axios.post(
          'http://localhost:8080/lib/user/submitorder',
          {
            // Add any data you want to send in the request body here
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
    
        console.log(response.data); // Do something with the response data here
      } catch (error) {
        console.error(error);
      }
  };


  return (
    <div>
      <h1> Order Managemet </h1>
     <div>
             <img className='exiticon'
             src={exitbutton} 
             onClick={(e) => navigate('/home')}
             />
              <div>
                    <button onClick={submitOrder} className="fixed-button" >sumit your order </button>
             </div>

      </div>
            {
                items?.length > 0
                ?(
                  <div>
                     {items.map((item) => (
                     <div className="record-card" key={item.id}>
                     <div>
                         <p>{item.isbn}</p>
                     </div>
                     <div>
                         <img src={item.cover !=="N/A" ? item.cover : 'https://via.placeholder.com/400' } alt="Not available"/>
                     </div>
                     
                  </div>
                     ))}
                  </div>
                ) : (
                    <div className="empty"> 
                    <h2> you're cart is empty you can't submit an empty order </h2>
                    </div>
                )  
                
            }
            </div>
    
  );
};


export default Order;