import React, { useState } from 'react';
import logo from '../../Images/image.png';
import { CiGrid41 } from "react-icons/ci";
import { LuLocateFixed } from "react-icons/lu";
import { FaBusinessTime } from "react-icons/fa";
import { PiLaptopLight } from "react-icons/pi";
import { GoPerson } from "react-icons/go";
import { RiHomeLine } from "react-icons/ri";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import Jobtracker from './Jobtracker';
import Myprofile from './Myprofile';
import Myschedule from './Myschedule';
import Overview from './Overview';
import Techlab from './Techlab';

const Dashboard = () => {
  const [active, setActive] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);  // state for sidebar toggle

  return (
    <>
      <div className="dash">
        <div className="dashboard container">
          
          {/* Mobile menu toggle */}
          <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <IoMdMenu />
          </button>

          <aside className={sidebarOpen ? "sidebar open" : "sidebar"}>
            <div className="top">
              <div className="log">
                <img src={logo} alt="logo" />
                <h2 style={{ fontSize: '18px' }}>GetReKuitd</h2>
                <div className="close" onClick={() => setSidebarOpen(false)}>
                  <IoMdClose />
                </div>
              </div>
              <div className="sidebar-links">
                <h3
                  onClick={() => { setActive('overview'); setSidebarOpen(false); }}
                  style={active === 'overview' ? activeLinks : {}}
                >
                  <span><CiGrid41 /></span> Overview
                </h3>
                <h3
                  onClick={() => { setActive('jobtracker'); setSidebarOpen(false); }}
                  style={active === 'jobtracker' ? activeLinks : {}}
                >
                  <span><LuLocateFixed /></span> Job Tracker
                </h3>
                <h3
                  onClick={() => { setActive('myschedule'); setSidebarOpen(false); }}
                  style={active === 'myschedule' ? activeLinks : {}}
                >
                  <span><FaBusinessTime /></span> My Schedule
                </h3>
                <h3
                  onClick={() => { setActive('techlab'); setSidebarOpen(false); }}
                  style={active === 'techlab' ? activeLinks : {}}
                >
                  <span><PiLaptopLight /></span> Tech Lab
                </h3>
                <h3
                  onClick={() => { setActive('myprofile'); setSidebarOpen(false); }}
                  style={active === 'myprofile' ? activeLinks : {}}
                >
                  <span><GoPerson /></span> My Profile
                </h3>
              </div>
            </div>
            <div className="logout">
              <h3>
                <span><RiHomeLine /></span> Return Home
              </h3>
            </div>
          </aside>

          <div className="sidebar-content-display">
            {active === 'overview' && <Overview />}
            {active === 'jobtracker' && <Jobtracker />}
            {active === 'myprofile' && <Myprofile />}
            {active === 'techlab' && <Techlab />}
            {active === 'myschedule' && <Myschedule />}
          </div>
        </div>
      </div>
    </>
  );
};

const activeLinks = {
  color: '#4042e2',
  borderLeft: '8px solid #4042E2',
  transform: 'translateX(5px)',
  padding: '10px'
};

export default Dashboard;
