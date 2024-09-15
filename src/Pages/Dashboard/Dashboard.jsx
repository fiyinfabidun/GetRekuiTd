import React from 'react';
import logo from '../../Images/image.png';
import { Link } from 'react-router-dom';
import { CiGrid41 } from "react-icons/ci";
import { LuLocateFixed } from "react-icons/lu";
import { FaBusinessTime } from "react-icons/fa";
import { PiLaptopLight } from "react-icons/pi";
import { GoPerson } from "react-icons/go";



const Dashboard = () => {
  return (
    <>
    <div className="dash">
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
                    <Link>
                    <span><CiGrid41 /></span>
                    Overview
                    </Link>
                </h3>
                <h3>
                    <Link>
                    <span><LuLocateFixed/></span>
                    Job Tracker
                    </Link>
                </h3>
                <h3>
                    <Link>
                    <span><FaBusinessTime /></span>
                    My schedule
                    </Link>
                </h3>
                <h3>
                    <Link>
                    <span><PiLaptopLight /></span>
                    TechLab
                    </Link>
                </h3>
                <h3>
                    <Link>
                    <span><GoPerson /></span>
                    My Profile
                    </Link>
                </h3>
            </div>
        </aside>    
    </div>
    </div>
    </>
  )
}

export default Dashboard