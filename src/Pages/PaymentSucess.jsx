import React from "react";
import Navbar from "../Components/Navbar";
import { motion } from "framer-motion"; // Importing framer-motion

function PaymentSuccess() {

  return (
    <>
      <div className="pay">
        <Navbar />
      </div>
      <div className="pay-grid">
       <div className="loader">

       </div>
      </div>
    </>
  );
}

export default PaymentSuccess;
