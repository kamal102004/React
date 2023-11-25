// LoginForm.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './lf.css'; // Import your stylesheet

const LoginForm = ({ handleLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here

    // Simulating a successful login
    handleLogin();

    // Redirect to the home page
    navigate('/home');
  };

  return (
    <div className="login-form-container">
      <img src='https://www.creatrixcampus.com/sites/default/files/styles/image_1200x700/public/2019-05/benefits-of-student-information-system.jpg?itok=5_KSMYS5' width={1200} height={700}></img>
      <form onSubmit={handleSubmit} className="loginbox">
        <h1>WELCOME BACK!</h1>
          <input className='i'
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder='Username'
          ></input>
          <input className='i'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder='Password'
          />
        <button className='signup' type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
