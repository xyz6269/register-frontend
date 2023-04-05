import React, { useState } from "react";
import axios from "axios";
import Home from "./Home";
import Not_available from "./NA.png";
import { useNavigate } from "react-router-dom";

const Notifications = () => {
    const token = localStorage.getItem('token');
    const [notis, setNotis] = useState([]);

  
    useEffect(() => {
      const fetchCart = async () => {
       // Retrieve JWT token from local storage
        console.log(token);
        try {
          const response = await axios.get(`http://localhost:8080/lib/user/mynotis`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
          );
          setNotis(response.data);
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchCart();
    }, []);

    return (
        <div>
            {
                notis?.length > 0
                ?(
                  <div className="notification">
                     {notis.map((noti) => (
                     <div noti={noti} key={noti.id} />
                    ))
                    }
                  </div>
                ) : (
                    <div className="empty"> 
                    <h2> No notifications available </h2>
                    </div>
                )   
            }
            </div>
    );
}

export default Notifications;