import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
// import "./animations.css";
import "../cssanimation/cssanimation.css";
function Item() {
  return (
    <motion.div
      variants={fadeIn("left", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.9 }}
      className="item"
    >
      <div>
        <p className="p-anim cssanimation leSnake sequence">Item 1</p>
      </div>
      <div>
        <p className="p-anim ">Item 1</p>
      </div>
      <div>
        <p className="p-anim">Item 1</p>
      </div>
      <div>
        <p className="p-anim">Item 1</p>
      </div>
      <div>
        <p className="p-anim">Item 1</p>
      </div>
      <div>
        <p className="p-anim">Item 1</p>
      </div>
    </motion.div>
  );
}

export default Item;
{
  /* <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      ></motion.div>
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      ></motion.div>
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      ></motion.div>
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      ></motion.div>
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      ></motion.div>
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      ></motion.div>
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      ></motion.div>
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      ></motion.div> */
}
