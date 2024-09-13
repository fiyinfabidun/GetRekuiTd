import React from "react";
import Navbar from "../Components/Navbar";
import { motion } from "framer-motion"; // Importing framer-motion

function PaymentSuccess() {
  // Loader CSS as a constant
  const loaderStyles = {
    loaderWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
    loader: {
      width: "100px",
      height: "50px",
      borderTop: "8px solid #3498db",
      borderRight: "8px solid transparent",
      borderRadius: "100px 100px 0 0",
    },
  };

  return (
    <>
      <div className="pay">
        <Navbar />
      </div>
      <div className="pay-grid">
        <motion.div
          className="loader"
          style={loaderStyles.loader}
          animate={{ rotate: 360 }} // Full rotation animation
          transition={{
            duration: 1,
            repeat: Infinity, // Loop animation
            ease: "linear",
          }}
        ></motion.div>
      </div>
    </>
  );
}

export default PaymentSuccess;
