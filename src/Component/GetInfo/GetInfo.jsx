import React from 'react'
import "./GetInfo.css";
import {motion} from "framer-motion"
import { fadeIn } from '../../variant';
const GetInfo = () => {
  return (
    <div>
        <div className='get__divs'>
            <motion.div
               variants={fadeIn("up", 0.5)}
               initial="hidden"
               whileInView={"show"}
               viewport={{once: false, amount: 0.5}}
            >
            <div className='get__div'>
                <div className='get__content'>
                <div className='get__contents'>Get Information updates about School of Science, Ile-Ife through your mail</div>
                <form className='form'>
                    <input src='text' placeholder='Enter your email address...'/>
                    <button>subscribe</button>
                </form>
                </div>
            </div>
            </motion.div>
        </div>
    </div>
  )
}

export default GetInfo
