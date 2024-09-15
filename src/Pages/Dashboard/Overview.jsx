import React from 'react';
import Navdash from './Navdash';
import { MdOutlineBusinessCenter } from "react-icons/md";
import { PiHandshakeLight } from "react-icons/pi";
import { PiWarningCircleLight } from "react-icons/pi";
import { GoPeople } from 'react-icons/go';
import recent from '../../Images/recent.png'


const Overview = () => {
  return (
    <>
        <Navdash title='Overview' />
    <div className="overview">
        <div className="main-overview">
            <div className="overview-board">
                <p>Job Application Tracking System</p>
                <h3>Your automated job application process dashboard</h3>
                <div className="buttons">
                    <button style={{
                        backgroundColor:'#111d63',
                        color:'white'
                    }}><p>Book an Appointment</p></button>
                    <button style={{
                        backgroundColor:'white',
                        color:'black'
                    }}><p>Join Comunity</p></button>
                    <button style={{
                        backgroundColor:'white',
                        color:'black'
                    }}><p>My Applications</p></button>
                </div>
            </div>
            <div className="overview-cards">
                <div className="vcard">
                    <div className="v-icon">
                        <MdOutlineBusinessCenter/>
                    </div>
                    <h4>Total Applications</h4>
                    <p>15</p>
                </div>
                <div className="vcard">
                    <div className="v-icon">
                        <GoPeople/>
                    </div>
                    <h4>Total Applications</h4>
                    <p>7</p>
                </div>
                <div className="vcard">
                    <div className="v-icon">
                        <PiHandshakeLight/>
                    </div>
                    <h4>Total Applications</h4>
                    <p>4</p>
                </div>
                <div className="vcard">
                    <div className="v-icon">
                        <PiWarningCircleLight/>
                    </div>
                    <h4>Total Applications</h4>
                    <p>1</p>
                </div>
            </div>
            <div className="recent">
                <div>
                    <h3>Recent Searches</h3>
                    <img src={recent} alt="" />
                </div>

            </div>
        </div>
        <div className="last-overview">
            <h4>profile header</h4>
        </div>
    </div>
    </>
  )
}

export default Overview