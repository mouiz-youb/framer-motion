import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import "../App.css";
function Slider() {
  return (
    <motion.div
      variants={fadeIn("left", 1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.9 }}
      className="slider"
    >
      <motion.div
        animate={{
          scale: [0, 1],
          rotate: [0, 360],
          borderRaduis: ["10%", "50%"],
        }}
        transition={{
          ease: "easeInOut",
          duration: 3,
        }}
        className="slider-item"
      ></motion.div>
      <motion.div
        animate={{
          scale: [0, 1],
          rotate: [0, 360],
          borderRaduis: ["10%", "50%"],
        }}
        transition={{
          ease: "easeInOut",
          duration: 3,
        }}
        className="slider-item"
      ></motion.div>
      <motion.div
        animate={{
          scale: [0, 1],
          rotate: [0, 360],
          borderRaduis: ["10%", "50%"],
        }}
        transition={{
          ease: "easeInOut",
          duration: 3,
        }}
        className="slider-item"
      ></motion.div>
      <motion.div
        animate={{
          scale: [0, 1],
          rotate: [0, 360],
          borderRaduis: ["10%", "50%"],
        }}
        transition={{
          ease: "easeInOut",
          duration: 3,
        }}
        className="slider-item"
      ></motion.div>
      <motion.div
        animate={{
          scale: [0, 1],
          rotate: [0, 360],
          borderRaduis: ["10%", "50%"],
        }}
        transition={{
          ease: "easeInOut",
          duration: 3,
        }}
        className="slider-item"
      ></motion.div>
      <motion.div
        animate={{
          scale: [0, 1],
          rotate: [0, 360],
          borderRaduis: ["10%", "50%"],
        }}
        transition={{
          ease: "easeInOut",
          duration: 3,
        }}
        className="slider-item"
      ></motion.div>
    </motion.div>
  );
}

export default Slider;
