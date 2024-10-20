import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
function Navbar() {
  return (
    <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.9 }}
        className="cart"
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </motion.div>
      
     
  )
}

export default Navbar;
