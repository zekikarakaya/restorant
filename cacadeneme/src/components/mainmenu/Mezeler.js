import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import MenuInsideCard from '../cards/MenuInsideCard';
import { motion } from "framer-motion";


const Mezeler = () => {
  const { t } = useTranslation();
  return (
    <motion.div 
    initial={{opacity :0}}
    animate={{opacity :1}}
    className='mt-28 container flex flex-col lg:items-center gap-y-2'>
      
      <div className='flex-0'>
        <Link to="/menu">
        <button className='my-4 bg-header-color rounded-md p-2 text-white'>{t('mainpage.menu')}</button>
        </Link>
      </div>
      
      <MenuInsideCard type="mezeler"></MenuInsideCard>

       

    </motion.div>
  )
}

export default Mezeler