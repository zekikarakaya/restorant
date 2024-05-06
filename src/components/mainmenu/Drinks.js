import React from 'react'
import { Link, Outlet } from "react-router-dom";
import alkolimg from "../../img/whiskey.jpg";
import noalkolimg from "../../img/mesrubat.jpg";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
const Drinks = () => {
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
        
        <div className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl">
          <Link to="/menu/drinks/alkollu">
            <div className="flex">
              <div className="w-1/3">
                <img src={alkolimg} alt="" className="w-full object-cover h-[120px] md:h-[200px] rounded-2xl"/>
              </div>
              <div className="relative w-2/3">
                <h1 className="absolute top-1/2 -translate-y-1/2 left-4">Alkollü</h1>
              </div>
            </div>
          </Link>
        </div>

        <div className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl">
          <Link to="/menu/drinks/alkolsuz">
            <div className="flex">
              <div className="w-1/3">
                <img src={noalkolimg} alt="" className="w-full object-cover h-[120px] md:h-[200px] rounded-2xl"/>
              </div>
              <div className="relative w-2/3">
                <h1 className="absolute top-1/2 -translate-y-1/2 left-4">Alkolsüz</h1>
              </div>
            </div>
          </Link>
        </div>
        <Outlet></Outlet>
    </motion.div>
  )
}

export default Drinks