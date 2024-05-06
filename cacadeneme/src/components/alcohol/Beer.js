import React from 'react'
import MenuInsideCard from '../cards/MenuInsideCard'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import { TiArrowBackOutline } from 'react-icons/ti';
const Beer = () => {
  return (
    <motion.div 
    initial={{opacity :0}}
    animate={{opacity :1}}
    className='mt-28 container flex flex-col lg:items-center gap-y-2'>
       
             <div className='flex-0'>
             <Link to="/menu/drinks/alkollu">
         <button className='my-4 bg-header-color rounded-md p-2 text-white'>
        <TiArrowBackOutline size={25}></TiArrowBackOutline>
        </button>
      </Link>
             </div>
    

      <MenuInsideCard type="beer"></MenuInsideCard>
  </motion.div>
  )
}

export default Beer