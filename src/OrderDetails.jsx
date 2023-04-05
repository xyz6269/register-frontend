import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import exitbutton from './exit.png';
import axios from "axios";
import CloseIcon from '@mui/icons-material/Close';


const OrderDetails = () => {
    const token = localStorage.getItem('token');
    const [data, setData] = useState([]);
    const navigate = useNavigate('/home');
    console.log(token);
    console.log("sfuckkkkkkkkkkkkk")
    const { id } = useParams();


    useEffect(() => {
        const fetchCart = async (id) => {
         // Retrieve JWT token from local storage
          console.log(token);
          try {
            const response = await axios.get(`http://localhost:8080/lib/admin/checkcart/${id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },{id}
            );
            setData(response.data);
            console.log(data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchCart(id);
      }, []);



    return (
        <div>
        <h1> Detail des demandes</h1>
       <div>
               <CloseIcon fontSize="large" className='exiticon' 
               onClick={(e) => navigate('/ordersmanagement')}
               />
        </div>
              {
                  data?.length > 0
                  ?(
                    <div className="container">
                       {data.map((data) => (
                       <div className="book" key={data.id}>
                       <div>
                           <p>{data.isbn}</p>
                       </div>
                       <div>
                           <img src={'https://via.placeholder.com/400'} alt="Not available"/>
                       </div>
                      
                       
                    </div>
                       ))}
                    </div>
                  ) : (
                      <div className="empty"> 
                      <h2> Pas de livre  </h2>
                      </div>
                  )   
              }
              </div>
      
    )
}
export default OrderDetails;