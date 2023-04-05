import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import exitbutton from './exit.png';
import axios from "axios";
import CloseIcon from '@mui/icons-material/Close';

const UserManagment = () => {
    const token = localStorage.getItem('token');
    const [data, setData] = useState([]);
    const navigate = useNavigate('/home');
    console.log(token);
    console.log("sfuckkkkkkkkkkkkk")


    useEffect(() => {
        const fetchCart = async () => {
         // Retrieve JWT token from local storage
          console.log(token);
          try {
            const response = await axios.get('http://localhost:8080/lib/admin/allusers', {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            setData(response.data);
            console.log(data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchCart();
      }, []);



    return (
        <div>
        <h1> User Management</h1>
       <div>
               <CloseIcon fontSize="large" className='exiticon' 
               onClick={(e) => navigate('/admin')}
               />
        </div>
              {
                  data?.length > 0
                  ?(
                    <div className="container">
                       {data.map((data) => (
                       <div className="book" key={data.id}>
                       <div>
                           <p>{data.fistName}</p>
                       </div>
                       <div>
                           <p>{data.lastName}</p>
                       </div>
                       <div>
                           <img src={'https://via.placeholder.com/400'} alt="Not available"/>
                       </div>
                       <div>
                           <button  className="form-control" >ban user</button>
                       </div>
                       
                    </div>
                       ))}
                    </div>
                  ) : (
                      <div className="empty"> 
                      <h2> No users  </h2>
                      </div>
                  )   
              }
              </div>
      
    )
}
export default UserManagment;