import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({  
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
    fetch('http://localhost:8080/lib/auth/authenticate', requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          console.log(data);
          
             axios.post(
              'http://localhost:8080/lib/admin/isadmin',{},
              {
                headers: {
                  Authorization: `Bearer ${data.token}`,
                  "Content-Type": "application/json",
                },
              }
            ).then(response => {
              if(response.status !== 200){
                console.log(data.token);
                navigate('/home');
              }else {
                console.log("hhhhhhhhhhhhhhhhhhhhhh achrif")
                navigate('/admin');
              }
            })
          
        } else {
          throw new Error('Login failed');
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
        className="form-control"
          placeholder="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
        className="form-control"
          name="password"
          placeholder="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit"> Log in</button>
    </form>
  );
}
export default Login;
