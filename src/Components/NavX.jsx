import React from "react";
import { motion } from "framer-motion";

import "../App.css";
// import { fadeIn2 } from "../../variants";
import { fadeIn } from "../../variants";
// import { transform } from "framer-motion/dom";
function NavX() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3, ease: "easeOut", delay: 0.5 }}
      className="navx"
    >
      <motion.ul
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.5,
            },
          },
        }}
        initial="hidden"
        animate="show"
        transition={{ duration: 10, ease: [0.25, 0.25, 0.25, 0.75], delay: 10 }}
      >
        <motion.li variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>
          home
        </motion.li>
        <motion.li variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>
          about us{" "}
        </motion.li>
        <motion.li variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>
          contact us
        </motion.li>
        <motion.li variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>
          shope
        </motion.li>
        <motion.li variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>
          dash board
        </motion.li>
      </motion.ul>
    </motion.div>
  );
}

export default NavX;
