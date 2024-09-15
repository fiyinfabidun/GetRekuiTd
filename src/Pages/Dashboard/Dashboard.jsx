import React, { useState } from 'react';
import logo from '../../Images/image.png';
import { Link } from 'react-router-dom';
import { CiGrid41 } from "react-icons/ci";
import { LuLocateFixed } from "react-icons/lu";
import { FaBusinessTime } from "react-icons/fa";
import { PiLaptopLight } from "react-icons/pi";
import { GoPerson } from "react-icons/go";
import { RiHomeLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import Jobtracker from './Jobtracker';
import Myprofile from './Myprofile';
import Myschedule from './Myschedule';
import Overview from './Overview';
import Techlab from './Techlab';


const Dashboard = () => {
  const [active, setActive] = useState("Overview");
  return (
    <>
      <div className="dash">
        <div className="dashboard container">
          <aside>
            <div className="top">
              <div className="log">
                <img src={logo} alt="logo" />
                <h2 style={{ fontSize: '18px' }}>GetReKuitd</h2>
                <div className="close">
                  <IoMdClose />
                </div>
              </div>
              <div className="sidebar">
                <h3
                 onClick={()=>setActive('overview')}
                 style={active === 'overview' ? activeLinks : {}}> 
                 <span><CiGrid41/></span> Overview
                </h3>
                <h3
                 onClick={()=>setActive('jobtracker')}
                 style={active === 'jobtracker' ? activeLinks : {}}> 
                 <span><LuLocateFixed/></span> Job Tracker
                </h3>
                <h3
                 onClick={()=>setActive('myschedule')}
                 style={active === 'myschedule' ? activeLinks : {}}> 
                 <span><FaBusinessTime/></span> My Schedule
                </h3>
                <h3
                 onClick={()=>setActive('techlab')}
                 style={active === 'techlab' ? activeLinks : {}}> 
                 <span><PiLaptopLight/></span>Tech Lab
                </h3>
                <h3
                 onClick={()=>setActive('myprofile')}
                 style={active === 'myprofile' ? activeLinks : {}}> 
                 <span><GoPerson/></span>My Profile
                </h3>

              </div>
            </div>
            <div className="logout">
            <h3>
                <Link to='/'>
                <span><RiHomeLine/></span>Return Home</Link>
                </h3>
            </div>
          </aside>


        <div className="sidebar-content-display">
           {active === 'overview' && <Overview/>}
           {active === 'jobtracker' && <Jobtracker/>}
           {active === 'myprofile' && <Myprofile/>}
           {active === 'techlab' && <Techlab/>}
           {active === 'myschedule' && <Myschedule/>}

        </div>



        </div>
      </div>
    </>
  );
};

  const activeLinks = {
      color:'#4042e2',
      borderLeft: '8px solid #4042E2',
      transform:'translateX(5px)',
      padding:'10px'
      
  }

export default Dashboard;
