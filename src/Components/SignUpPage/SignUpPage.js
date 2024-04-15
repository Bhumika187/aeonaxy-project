
import React, { useState } from 'react';
import './SignUpPage.css';
import {Link } from 'react-router-dom';



function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit the form
      console.log(formData);
      // You can add your signup logic here
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.username.trim()) {
      errors.username = 'Username is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
      isValid = false;
    }

    if (!formData.password.trim()) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };



  return (
    <div className='sign-up object-cover text-base font-bold'>
      <div className="side-img bg-cover object-cover">
      
        <img src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VhfGVufDB8fDB8fHww" alt="first-img"/>
  
      </div>
    <div className="signup-container pb-60">
    <div className="flex justify-end">
       <p className="text-right font-normal text-sm">
       Already a member?
       <a href="#" className="text-blue-500 hover:text-blue-700"> Sign In</a>
      </p>
    </div>
      <h2 className='font-bold text-xl mb-6'>Sign up to Dribbble</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="new-grp flex justify-center items-center gap-4">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input className="text-sm font-normal bg-gray-100"
            type="text"
            placeholder="John Doe"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {formErrors.name && <span className="error">{formErrors.name}</span>}
        </div>
        <div className="form-group ">
          <label htmlFor="username">Username</label>
          <input  className="text-sm font-normal  bg-gray-100"
            type="text"
            placeholder="John Doe"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          {formErrors.username && <span className="error">{formErrors.username}</span>}
        </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input className="text-sm font-normal bg-gray-100" 
            type="email"
            placeholder="abc@gmail.com"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {formErrors.email && <span className="error">{formErrors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input className="text-sm font-normal bg-gray-100"
            type="password"
            placeholder="6+ characters "
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {formErrors.password && <span className="error">{formErrors.password}</span>}
        </div>
        <div>
    <input type="checkbox" id="scales" name="scales" />
    <label for="scales" className="font-normal text-sm text-gray-400 ml-2">Creating an account means you're okay with our
   <a href="https://termly.io/resources/templates/terms-of-service-template/"
    className="text-blue-500"
  >  Terms of Service
  </a>, <a href="https://termly.io/resources/templates/terms-of-service-template/"
    className="text-blue-500"
  >
    Privacy Policy
  </a> Privacy Policy, and our default  <a href="https://termly.io/resources/templates/terms-of-service-template/"
    className="text-blue-500"
  >
    Notification Settings
  </a>.</label>
  </div>
        <div> 
        <button type="submit" className="signup-btn mt-8 text-sm">
        <Link to="/profile" className='nav-item'>Create Account</Link>
        </button>
        </div>
        <p className="font-normal text-xs text-gray-400 pt-6">This site is protected by reCAPTCHA and the Google <a href="https://termly.io/resources/templates/terms-of-service-template/"
    className="text-blue-500"
  >
   Privacy Policy
  </a> and <a href="https://termly.io/resources/templates/terms-of-service-template/"
    className="text-blue-500"
  >
     Terms of Service 
  </a> apply.</p>
      </form>
    </div>
    </div>
  );
}

export default SignUpPage;