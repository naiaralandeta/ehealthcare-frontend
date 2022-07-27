import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

const initialFormState = {
  username: '',
  password: ''
};

const [user, setUser] = useState(initialFormState);
const navigate = useNavigate();

useEffect(() => {
  fetch(`/api/login`).then(response => response.json().then(data => setUser(data)))
}, [setUser])

const handleChange = (event) => {
  const { name, value } = event.target

  setUser({ ...user, [name]: value })
}

const handleSubmit = async (event) => {
  event.preventDefault();

  await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });

  setUser(initialFormState);
  navigate('/api/admin');
}


// Poner los name como estan en el back, crear la variable e intentar conectar con el back para que lo cree
// si lo consigo validar los campos necesario y redirigir a la pagina de usuario

    return (
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div className="mb-3">
          <label>Username</label>
          <input
            type="text" name="username" value={user.username || ''}
            onChange={handleChange}
            className="form-control"
            placeholder="Username"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password" name="password" value={user.password || ''}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    )
};
  
export default SignUp;