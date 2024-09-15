import React from 'react';
import logo from '../../Images/image.png';
import { Link } from 'react-router-dom';
import { CiGrid41 } from "react-icons/ci";


const Dashboard = () => {
  return (
    <>
    <div className="dashboard container">
        <aside>
            <div className="top">
            <div className="log">
                    <img src={logo} alt="logo" />
                    <p>GetReKuitd</p>
                </div>
            </div>
            <div className="sidebar">
             <h3>
               <Link to='/overview'>
               <span><CiGrid41 /></span>
               Overview
               </Link>
             </h3>
            </div>
        </aside>    
    </div>
    </>
  )
}

export default Dashboard