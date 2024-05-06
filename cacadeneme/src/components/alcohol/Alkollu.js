import React from 'react'
import { Link, Outlet } from "react-router-dom";
import MenuCard from '../cards/MenuCard';
import { motion } from "framer-motion";
const Alkollu = () => {

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
       
         <MenuCard type="alkolmenus"></MenuCard>
         <Outlet></Outlet>
    </motion.div>
  )
}

export default Alkollu