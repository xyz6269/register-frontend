import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  
  const navigate = useNavigate();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    };
    fetch('http://localhost:8080/lib/auth/register', requestOptions)
      .then(response => {
        if (response.ok) {
          navigate('/login');
        } else {
          throw new Error('Registration failed');
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>

        <input
        className="form-control"
          type="text"
          name="firstName"
          placeholder="first name"
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        
        <input
        className="form-control"
          type="text"
          name="lastName"
          placeholder="last name"
          value={formData.lastName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
 
        <input
          className="form-control"
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>

        <input
        className="form-control"
          type="password"
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit"> Sign in</button>    
    </form>
  );
}
export default Register;
