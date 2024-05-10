import React from 'react'
import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import AlcoholCard from '../shared/AlcoholCard';
import Button from '../shared/Button';
const Drinks = () => {

  return (
    <motion.div
    initial={{opacity :0}}
    animate={{opacity :1}}
    className='mt-28 container flex flex-col lg:items-center gap-y-2'>
      <div className='flex-0'>
        <Link to="/menu">
        <Button></Button>
        </Link>
      </div>
         <AlcoholCard type="alcohol"></AlcoholCard>
         <AlcoholCard type="noAlcohol"></AlcoholCard>
        <Outlet></Outlet>
    </motion.div>
  )
}

export default Drinks