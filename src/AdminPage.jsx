import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Adminbook from './AdminBook'
import profileIcon from './user.png'
import axios from 'axios';
import Ordericon from '@mui/icons-material/Inventory2';
import UsersIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import Validorders from '@mui/icons-material/AssignmentTurnedIn';


const AdminPage = () => {

    const [adminbooks, setBook] = useState([]);
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
            <h1> Gestionnaire BIBLIOTHEQUE ESTO </h1>
            <div>
             <PersonIcon fontSize='large' className='profileicon'
             onClick={(e) => navigate('/adminprofile')
            }
             />
            </div>

            <div>
             <UsersIcon fontSize='large' className='carticon' 
             onClick={(e) => navigate('/users')
            }
             />
            </div>

             <div>
             <Ordericon fontSize='large' className='ordericon'
             onClick={(e) => navigate('/ordersmanagement')
            }
             />
            </div>

            <div>
             <Validorders fontSize='large' className='trackingicon'
             onClick={(e) => navigate('/ordertracking')
            }
             />
            </div>
        
            <div>
            {
                adminbooks?.length > 0
                ?(
                  <div className="grid-container">
                     {adminbooks.map((adminbook) => (
                     <Adminbook adminbook={adminbook} key={adminbook.id} />
                     ))}
                  </div>
                ) : (
                    <div className="empty"> 
                    <h2> No books found </h2>
                    </div>
                )   
            }
            </div>
            <div>
                    <button onClick={(e) => navigate('/bookwizard')} className="fixed-button" > Ajouter un livre </button>
             </div>
            
        </div>
    );
};

export default AdminPage;
