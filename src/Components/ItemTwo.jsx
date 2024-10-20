import React from 'react'
import { fadeIn } from '../../variants'
import {motion} from "framer-motion"
function ItemTwo() {
  return (
    <motion.div 
    variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.9 }}
    className='item-two'>
        <div>
          <p className='anim'>
            the best 
          </p>
        </div>
        <div>
          <p className='anim'>
            the best 
          </p>
        </div>
        <div>
          <p className='anim'>
            the best 
          </p>
        </div>
        <div>
          <p className='anim'>
            the best 
          </p>
        </div>
        <div>
          <p className='anim'>
            the best 
          </p>
        </div>
        <div>
          <p className='anim'>
            the best 
          </p>
        </div>
        <div>
          <p className='anim'>
            the best 
          </p>
        </div>
        <div>
          <p className='anim'>
            the best 
          </p>
        </div>
    </motion.div>
  )
}

export default ItemTwo