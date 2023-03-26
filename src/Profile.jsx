import { useState , useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import jwt from "jwt-decode";

const Profile = () => {
    const token = localStorage.getItem('token'); 
    const decoded = jwt(token);
    console.log(decoded);
    //const cookies = new cookies();
    //const [user , setUser] = useState();

   useEffect(()=> {
    fetch(`http://localhost:8080/lib/user/current`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log("hhhhh");
        }) 
        .catch(error => {
            console.error(error);
          });
   },[])

  
   
    return (
        <div>
             <h1>Profile</h1>
      <p>First Name : {data.firstName} </p>
      <p>Last Name  : {data.lastName} </p>
      <p>Email      : {data.email} </p>
        </div>
    );
}

export default Profile;