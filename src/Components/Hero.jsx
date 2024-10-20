import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import "../App.css";
function Hero() {
  return (
    <div className="hero">
      <motion.div
        variants={fadeIn("right", 1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.9 }}
        className="hero-left"
      ></motion.div>
      <motion.div
        variants={fadeIn("left", 1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.9 }}
        className="hero-right"
      ></motion.div>
    </div>
  );
}

export default Hero;
