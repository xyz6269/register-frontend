import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect , useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { Button } from "bootstrap";
import OrderDetails from "./OrderDetails";


const OrderTracking = () =>{
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem('token');
  const navigate = useNavigate()

  useEffect(() => {
    const fetchOrders = async () => {
     // Retrieve JWT token from local storage
      console.log(token);
      try {
        const response = await axios.get('http://localhost:8080/lib/admin/validorders', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOrders(response.data);
        console.log(orders);
      } catch (error) {
        console.error(error);
      }
    };
    fetchOrders();
  }, []);


  const ValidateReturn  = async (id) => {
    console.log(token);
    try {
        const response = await axios.post(
          `http://localhost:8080/lib/admin/validate/return/${id}`,
          {id},
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            }
          }
        );
    
        console.log(response.data); // Do something with the response data here
      } catch (error) {
        console.error(error);
      }
  };


  return (
    <div>
      <h1> Suivis des demandes </h1>
     <div>
             <CloseIcon fontSize="large" className='exiticon'
             onClick={(e) => navigate('/admin')}
             />
      </div>
            {
                orders?.length > 0
                ?(
                  <div>
                     {orders.map((order) => (
                     <div className="record-card" key={order.id}>

                     <div>
                         <p>proprietaire : {order.orderOwner}</p>
                     </div>
            
                    <div>
                        <button onClick={() => ValidateReturn(order.id)} className="w-100 btn btn-lg btn-primary" > valider le retour  </button>
                    </div>
                     
                  </div>
                     ))}
                  </div>
                ) : (
                    <div className="empty"> 
                    <h2> Pas de demande valider  </h2>
                    </div>
                )  
                
            }
            </div>
    
  );
};


export default OrderTracking;