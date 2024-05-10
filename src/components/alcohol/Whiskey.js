import React from 'react'
import { Link } from 'react-router-dom'
import MenuInsideCard from '../shared/MenuInsideCard'
import { motion } from "framer-motion";
import Button from '../shared/Button';
const Whiskey = () => {
  return (
    <motion.div 
    initial={{opacity :0}}
    animate={{opacity :1}}
    className='mt-28 container flex flex-col lg:items-center gap-y-2'>
      <div className='flex-0'>

     <Link to="/menu/drinks/alkollu">
     <Button type="icon"></Button>
        </Link>
        
      </div>
      <MenuInsideCard type="whiskey"></MenuInsideCard>
  </motion.div>
  )
}

export default Whiskey