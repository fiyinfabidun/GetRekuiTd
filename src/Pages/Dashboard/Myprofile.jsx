import React, { useState } from 'react';
import Navdash from './Navdash';
import { FaCamera } from 'react-icons/fa';
import PrivateInfo from '../../Components/PrivateInfo';
import PrivateneedAssesment from '../../Components/PrivateneedAssesment';


const Myprofile = () => {
  const [active, setactive] = useState('personalinfo')
  return (
    <>
    <Navdash title='My Profile'/>
    <div className="myprofile-background">
      <div className="image-bg">
      
      </div>
      <div className="grid-bg">
        <div className="component">

        <div className="profile-side-bar">
        <div className="profile-container">
      <div className="profile-picture">
        <img 
          src="https://via.placeholder.com/150" 
          alt="Profile" 
          className="profile-img" 
        />
        <FaCamera className="icon" />
      </div>
    </div>
              <div className="user-applications">
                <div className="first-div">
                <h3>Mike sean</h3>
                <p>mike@example.com</p>
                </div>
                <div className="each">
                <h4>Total Applications</h4>
                <h3 style={{color:'blue'}}> 223</h3>
                </div>
                <div className="each">
                <h4>Offers Received</h4>
                <h3 style={{color:'green'}}>14</h3>
                </div>
                <div className="each">
                <h4>Upcoming Interviews</h4>
                <h3 style={{color:'orange'}}>13</h3>
                </div>
                <div className="each">
                <h4>Rejections</h4>
                <h3 style={{color:'red'}}>67</h3>
                </div>
              </div>
        </div>
        <div className="personal-info">
          <div className="linked-titles">
            <p onClick={()=> setactive('personalinfo')}>Private Information</p>
            <p onClick={()=>setactive('privateinfoAssesment')}>Need Assesment</p>
          </div>
          {active === 'personalinfo' && <PrivateInfo/>}
          {active === 'privateinfoAssesment' && <PrivateneedAssesment/>}
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Myprofile