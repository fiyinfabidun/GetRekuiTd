import React, { useState } from 'react';
import logo from '../Images/image.png';
import img from '../Images/image-login.png';
import { Link,useNavigate } from 'react-router-dom';
import { HiArrowLongLeft } from "react-icons/hi2";


function OtpVerification() {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const handleChange = (element, index) => {
      if (isNaN(element.value)) return;
  
      setOtp([...otp.map((d, i) => (i === index ? element.value : d))]);
  
     
      if (element.nextSibling) {
        element.nextSibling.focus();
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      if (otp.join("").length !== 6) {
        setError("Please enter a valid 6-digit OTP");
      } else {
        setError("");
        console.log("OTP submitted:", otp.join(""));
        navigate('/acctCreate');
        
      }
    };
  
  return (
    <>
     <div className="Ot-ver">
     <div className="Login">
        <img src={img} alt="" className="login-img" />

        <div className="form-login Otp">
          <div className="log">
            <img src={logo} alt="" />
            <h2>GetReKuitd</h2>
          </div>

         <p className='back'><Link to='/login'>
         <HiArrowLongLeft />
         Go Back</Link></p>
          
          <div className="Otp-code">
            <div className="otp-verification">
              <h2>Verify your Account</h2>
              <div style={{
                textAlign:'center'
              }}>
              <p>We’ve sent a 6 digit code to your email</p>
              <h3 style={{
                fontSize:'16px'
              }}>mikesangel@gmail.com</h3>
              </div>

              <form onSubmit={handleSubmit} className="otp-form">
                <p>Enter Otp</p>
                <div className="otp-inputs">
                 {otp.map((data, index) => {
                   return (
                     <input
                       key={index}
                       type="text"
                       maxLength="1"
                       value={data}
                       onChange={(e) => handleChange(e.target, index)}
                       onFocus={(e) => e.target.select()} 
                     />
                   );
                 })}
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit" className="verify-btn">Proceed</button>
              </form>

              <p className="resend-otp">Resend OTP In 40 seconds.</p>
            </div>
          </div>   
        </div>
      </div> 
    </div>  
    </>
  );
}

export default OtpVerification;
