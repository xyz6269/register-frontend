import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect , useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { Button } from "bootstrap";


const OrderManagement = () =>{
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem('token');
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCart = async () => {
     // Retrieve JWT token from local storage
      console.log(token);
      try {
        const response = await axios.get('http://localhost:8080/lib/admin/new/orders', {
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
    fetchCart();
  }, []);

  const deleteOrder = async (id) => {
    console.log(token);
    try {
        const response = await axios.delete(
          `http://localhost:8080/lib/admin/reject/Order/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            }
          },
          {id}
        );
    
        console.log(response.data); // Do something with the response data here
      } catch (error) {
        console.error(error);
      }
  };

  const Validate = async (id) => {
    console.log(token);
    try {
        const response = await axios.post(
          `http://localhost:8080/lib/admin/validateorder/${id}`,
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

  const details =(id) => {
    navigate(`/details/${id}`)
  }


  return (
    <div>
      <h1> Gestion des demandes </h1>
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
                        <button onClick={() => deleteOrder(order.id)} className="w-100 btn btn-lg btn-primary" >rejeter la demande </button>
                    </div>
                    <div>
                        <button onClick={() => Validate(order.id)} className="w-100 btn btn-lg btn-primary" > valider la demande </button>
                    </div>
                    <div>
                        <button onClick={() => details(order.id) } className="w-100 btn btn-lg btn-primary" > details </button>
                    </div>
                     
                  </div>
                     ))}
                  </div>
                ) : (
                    <div className="empty"> 
                    <h2> pas de demandes </h2>
                    </div>
                )  
                
            }
            </div>
    
  );
};


export default OrderManagement;