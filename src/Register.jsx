import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [navigate, setNavigate] = useState('')

    const submit = async () => {
        await fetch('http://localhost:8080/lib/auth/register', {
          method: 'POST',
          headers:{'Content-Type':'application/json ; charset=UTF-8'},
          body: JSON.stringify({
               firstName,
               lastName,
               email,
               password
          })
        });
        setNavigate(true);
    };

    if(navigate){
    return <Navigate to="/login" />;
    }

  return (
    <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please register</h1>

        <input className="form-control" placeholder="first name" required 
             onChange = {e => setFirstName(e.target.value)}
        />

        <input className="form-control" placeholder="last name" required 
             onChange = {e => setLastName(e.target.value)}
        />

        <input className="form-control" type="email" placeholder="email" required 
             onChange = {e => setEmail(e.target.value)}
        />

        <input className="form-control" type="password" placeholder="password" required 
             onChange = {e => setPassword(e.target.value)}
        />

        <button className="w-100 btn btn-lg btn-primary" type="submit"> Sign in</button>
    </form>
  )
}

export default Register;
