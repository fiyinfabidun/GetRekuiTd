import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


const PrivateInfo = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');



  const handlePhoneChange = (value) => {
    setPhoneNumber(value);


    if (value.length < 10) {
      setError('Phone number is too short');
    } else {
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (phoneNumber.length < 10) {
      setError('Please enter a valid phone number');
      return;
    }}

    


  return (
    <div className="update-phonenumber">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <PhoneInput
            country={'ng'} 
            value={phoneNumber}
            onChange={handlePhoneChange}
            placeholder="Enter phone number"
            inputClass={`phone-input ${error ? 'input-error' : ''}`}
            inputStyle={{
              width: '350px',
              paddingLeft: '50px',
              fontSize: '16px',
              marginBottom: '10px',
              border: "0px",
            }}
          />
        </div>

        {error && <p className="error">{error}</p>}
      </form>
      <div className="update-btn">
        <p>Update phone number</p>
      </div>
    </div>
  );
};

export default PrivateInfo;
