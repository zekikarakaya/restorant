import React from 'react'
import{Link} from "react-router-dom";
import { useTranslation } from 'react-i18next';
const DropDown = () => {
  const { t } = useTranslation();
  return (
    <div className='w-24 text-black flex flex-col absolute top-24 right-1 rounded-lg border border-gray-500 p-3 space-y-3 z-10'>
    <Link to="/">{t('mainpage.home')}</Link>
    <Link to="/menu">{t('mainpag.menu')}</Link>
   </div>
  )
}

export default DropDown
