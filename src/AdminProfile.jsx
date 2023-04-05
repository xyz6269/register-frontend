import { useState , useEffect, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { config } from "process";

// Set this wherever you get your token, you can add some logic at the initialization of the app to restore a token from localStorage as well, you only need to do this when you initialzie or reassign your token


const AdminBook = () => {
  const token = localStorage.getItem('token');
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  console.log(token);
  console.log("sfuckkkkkkkkkkkkk")
  

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getuser = async () => {
      try {
        const res = await axios.get('http://localhost:8080/lib/auth/current', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(res.data);
        if (isMounted){
          setData(res.data);  
        }
      }catch(error) {
        console.error(error);
      }
    }

    getuser();

    return () => {
      isMounted = false;
      controller.abort();
    }
  },[])

   const exit = () => {
    return navigate('/admin');
   }

    return (
     <div>
      <h1>Profile</h1>
      <p>First Name : {data.firstName} </p>
      <p>Last Name  : {data.lastName} </p>
      <p>Email      : {data.email}    </p>
      <div>
              <button onClick={exit} className="form-control" > return </button>
      </div>
    </div>
    
    );
}

export default AdminBook;