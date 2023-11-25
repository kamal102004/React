// SignupForm.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ handleSignup }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    // Add additional signup fields as needed
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here

    // Simulating a successful signup
    handleSignup();

    // Redirect to the home page
    navigate('/home');
  };

  return (
    <div className="login-form-container">
      <img src='https://www.creatrixcampus.com/sites/default/files/styles/image_1200x700/public/2019-05/benefits-of-student-information-system.jpg?itok=5_KSMYS5' ></img>
      <form onSubmit={handleSubmit} className="signupbox">
      <h1>SIGN UP</h1>
          <input className='i'
            placeholder='Username'
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <input className='i'
            placeholder='Create Password'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <input className='i'
            placeholder='Confirm Password'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        <button className='signup' type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
