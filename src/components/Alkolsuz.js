import React from 'react'
import { Link } from "react-router-dom";
import DrinksCard from './cards/DrinksCard';
import { motion } from "framer-motion";
const Alkolsuz = () => {
  
  return (
    <motion.div 
    initial={{opacity :0}}
    animate={{opacity :1}}
    className='mt-28 container flex flex-col lg:items-center gap-y-2'>
      <div className='flex-0'>
      <Link to="/menu/drinks">
        <button className='my-4 bg-header-color rounded-md p-2 text-white'>Drinks</button>
        </Link>
      </div>

        <DrinksCard type="alkolsuz"></DrinksCard>
    </motion.div>
  )
}

export default Alkolsuz

