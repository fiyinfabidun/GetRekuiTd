import React from "react";
import Navbar from "../Components/Navbar";
import { BiLoaderAlt } from "react-icons/bi";

function PaymentSuccess() {

  return (
    <>
      <div className="pay">
        <Navbar />
      </div>
      <div className="pay-grid">
       <div className="loader">
       <BiLoaderAlt className="load" />
       </div>
       <h1>Payment made successfully</h1>
       <p>We’ve received your subscription successfully. Proceed to your dashboard to track your automated job processes</p>
       <div className="buttons">
        <button></button>
        <button></button>
       </div>
      </div>
    </>
  );
}

export default PaymentSuccess;
