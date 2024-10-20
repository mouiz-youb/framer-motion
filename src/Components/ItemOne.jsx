import React from 'react'
import { fadeIn } from '../../variants'
import {motion} from "framer-motion"
function ItemOne() {
  return (
    <motion.div 
    variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.9 }}
    className='item-one'>
        <div >
          <p className='ani-text'>
            I am the greatest version of me
          </p>
           </div>
        <div >
          <p className='ani-text'>
            I am the greatest version of me
          </p>
           </div>
        <div >
          <p className='ani-text'>
            I am the greatest version of me
          </p>
           </div>
        <div >
          <p className='ani-text'>
            I am the greatest version of me
          </p>
           </div>
    </motion.div>
  )
}

export default ItemOne