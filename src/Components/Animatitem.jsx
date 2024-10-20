import React from "react";
import { fadeIn } from "../../variants";
import {motion} from "framer-motion"
function Animatitem() {
  return (
    <motion.div
      className="animated"
      variants={fadeIn("left", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.9 }}
    ></motion.div>
  );
}

export default Animatitem;
