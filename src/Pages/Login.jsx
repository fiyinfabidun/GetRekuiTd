import React, { useState } from 'react';
import img from '../Images/image-login.png';
import logo from '../Images/image.png';
import { FaEnvelope, FaLock } from 'react-icons/fa'; // Importing icons
import gge from '../Images/gge.png';
import lkd from '../Images/lkd.png';
import { Link } from 'react-router-dom';
import { HiArrowLongLeft } from "react-icons/hi2";


function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validate form
  const validate = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <>
      <div className="Login">
        <img src={img} alt="" className="login-img" />
        <div className="form-login">
          <div className="log">
            <img src={logo} alt="" />
            <h2>GetReKuitd</h2>
          </div>
          <p className='back'><Link to='/'>
         <HiArrowLongLeft />
         Go Back</Link></p>
          <div className="text">
            <h2>Log in to your Account</h2>
            <p>Welcome back! Let's Get You Back On Track</p>
          </div>

          <div className="link-btn">
            <button className="btn">
              <img src={gge} alt="" />
              <h3>Google</h3>
            </button>
            <button className="btn">
              <img src={lkd} alt="" />
              <h3>LinkedIn</h3>
            </button>
          </div>

          <p className="cont">or continue with</p>

          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="input-container">
              <FaEnvelope className="icon" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            {errors.email && <p className="error">{errors.email}</p>} {/* Error below email */}

            {/* Password Field */}
            <div className="input-container">
              <FaLock className="icon" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            {errors.password && <p className="error">{errors.password}</p>} {/* Error below password */}

            <div className="form-info">
              <div className="check">
                <input type="checkbox" />
                <p><Link to="/OtpVerify">Remember me</Link></p>
              </div>
              <p><Link to='/forgotpass'>Forgot password?</Link></p>
            </div>

            <button type="submit">Login</button>
            <button type="button" className="sign-in">
              <Link to="/Sign">Create Account Instead</Link>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
