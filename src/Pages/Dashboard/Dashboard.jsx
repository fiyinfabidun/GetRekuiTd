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

const Dashboard = () => {
  const [active, setActive] = useState("Overview");

  const handleActiveLink = (link) => {
    setActive(link);
  };

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
                <h3 className={active === "Overview" ? "active" : ""}>
                  <Link onClick={() => handleActiveLink("Overview")}>
                    <span><CiGrid41 /></span>
                    Overview
                  </Link>
                </h3>
                <h3 className={active === "Job Tracker" ? "active" : ""}>
                  <Link onClick={() => handleActiveLink("Job Tracker")}>
                    <span><LuLocateFixed /></span>
                    Job Tracker
                  </Link>
                </h3>
                <h3 className={active === "My schedule" ? "active" : ""}>
                  <Link onClick={() => handleActiveLink("My schedule")}>
                    <span><FaBusinessTime /></span>
                    My schedule
                  </Link>
                </h3>
                <h3 className={active === "TechLab" ? "active" : ""}>
                  <Link onClick={() => handleActiveLink("TechLab")}>
                    <span><PiLaptopLight /></span>
                    TechLab
                  </Link>
                </h3>
                <h3 className={active === "My Profile" ? "active" : ""}>
                  <Link onClick={() => handleActiveLink("My Profile")}>
                    <span><GoPerson /></span>
                    My Profile
                  </Link>
                </h3>
              </div>
            </div>
            <div className="logout">
              <h3 className={active === "Retun Home" ? "active" : ""}>
                <Link onClick={() => handleActiveLink("Retun Home")}>
                  <span><RiHomeLine /></span>
                  Return Home
                </Link>
              </h3>
            </div>
          </aside>


        <div className="sidebar-content-display">

        </div>

        <div className="third-grid">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vero blanditiis molestiae quia magnam maxime nostrum incidunt voluptas necessitatibus sunt ducimus, veniam placeat sequi. Facere vel libero eius reprehenderit eligendi.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta dignissimos fuga et voluptatum pariatur consectetur accusantium illo sint quae? Ullam voluptatem porro expedita repudiandae ipsum minima ab suscipit quia!</p>
        </div>


        </div>
      </div>
    </>
  );
};

export default Dashboard;
