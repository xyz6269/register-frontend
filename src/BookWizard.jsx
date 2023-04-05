import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';  

function BookWizard() {
  const [bookInfo, setbookInfo] = useState({ isbn: '', quantity: 0 });
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get the JWT token from local storage
    const token = localStorage.getItem('token');

    // Configure the axios request headers with the JWT token
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    // Send the POST request to the API endpoint
    try {
      const response = await axios.post('http://localhost:8080/lib/admin/add/book', bookInfo, { headers });
      console.log(response.data); // or handle response data
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setbookInfo({ ...bookInfo, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
      <img className='exiticon'
             src={CloseIcon} 
             onClick={(e) => navigate('/admin')}
             />
        <input
        className="form-control"
          type="text"
          name="isbn"
          placeholder="book title"
          value={bookInfo.isbn}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        
        <input
        className="form-control"
          type="number"
          name="quantity"
          placeholder="quantity"
          value={bookInfo.quantity}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        
        <input
        className="form-control"
          type="text"
          name="cover"
          placeholder="book cover"
          value={bookInfo.cover}
          onChange={handleInputChange}
          required
        />
      </div>
      
      <button className="w-100 btn btn-lg btn-primary" type="submit"> create new book</button>    
    </form>
  );
}
export default BookWizard;
