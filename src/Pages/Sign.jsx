import React, { useState } from 'react';
import img from '../Images/image-login.png';
import logo from '../Images/image.png';
import { MdOutlineMailOutline, MdLockOutline } from "react-icons/md";
import gge from '../Images/gge.png';
import lkd from '../Images/lkd.png';
import { Link, useNavigate } from 'react-router-dom'; 
import { IoPersonOutline } from "react-icons/io5";
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { HiArrowLongLeft } from "react-icons/hi2";

function Sign() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    password: '',
  });
  
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); 
  
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handlePhoneChange = (phone) => {
    setFormData({
      ...formData,
      phone,
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
    
    if (!formData.firstName) {
      newErrors.firstName = 'First Name is required';
    }
    
    if (!formData.lastName) {
      newErrors.lastName = 'Last Name is required';
    }
    
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.length < 10) {
      newErrors.phone = 'Phone number must be at least 10 digits';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formErrors = validate();
    setErrors(formErrors);
    
    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted:', formData);
      navigate('/OtpVerify');
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
          <p className='back'><Link to='/login'>
         <HiArrowLongLeft />
         Go Back</Link></p>

          <div className="text">
            <h2>Create Account</h2>
            <p>Your Dream Job Awaits - Let's Get Started</p>
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
            <div className="input-container">
              <MdOutlineMailOutline className="icon" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
             
            </div>
            {errors.email && <p className="error">{errors.email}</p>}

            <div className="create-acct">
              <div>
                <div className="input-container">
                  <IoPersonOutline className='icon' />
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                {errors.firstName && <p className="error">{errors.firstName}</p>}
              </div>

              <div>
                <div className="input-container">
                  <IoPersonOutline className='icon' />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
                {errors.lastName && <p className="error">{errors.lastName}</p>}
              </div>
            </div>

            <div className="input-container">
              <PhoneInput
                country={'us'} // default country
                value={formData.phone}
                onChange={handlePhoneChange}
                enableAreaCodes={true}
                enableTerritories={true}
                inputStyle={{
                  width: '350px',
                  paddingLeft: '50px',
                  fontSize: '16px',
                  marginBottom: '10px',
                  border: "0px",
                }}
              />
             
            </div>
            {errors.phone && <p className="error">{errors.phone}</p>}

            <div className="input-container">
              <MdLockOutline className="icon" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
              />
              
            </div>
            {errors.password && <p className="error">{errors.password}</p>}


            <button type="submit">Create Account</button>
            <button type="button" className="sign-in">
              <Link to='/login'>Login Instead</Link>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Sign;
