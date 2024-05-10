import React from 'react'
import MenuInsideCard from '../shared/MenuInsideCard'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import Button from '../shared/Button';
const Vodka = () => {
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
      <MenuInsideCard type="vodka"></MenuInsideCard>
  </motion.div>
  )
}

export default Vodka