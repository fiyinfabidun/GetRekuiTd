import React from 'react';
import img from '../Images/image-login.png'
import logo from '../Images/image.png'
import check from '../Images/check.png'

function AccountCreated() {
  return (
    <>
      <div className="Login">
        <img src={img} alt="" className="login-img" />

        <div className="form-login crte">
        <div className="log">
            <img src={logo} alt="" />
            <h2>GetReKuitd</h2>
          </div>
          <img src={check} alt="" />
          <div className="congrat-text">
            <h2>Congratulations, your account
            has been created successfully!</h2>
            <p>Kickstart Your Dream Career Journey</p>
            <button>Proceed</button>
          </div>
         </div>
    </div>  
    </>
  )
}

export default AccountCreated