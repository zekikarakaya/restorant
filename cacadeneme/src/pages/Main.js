import React from 'react'
import{Link} from "react-router-dom";
import { useTranslation } from 'react-i18next';
const Main = () => {
    const divStyle = {
        backgroundImage: 'url("img/header-img.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
      const { t } = useTranslation();
  return (
    <div style={divStyle} className='h-[660px] relative shadow-2xl mt-10'>
        <div className='w-full flex flex-col absolute top-[240px] md:left-24 items-center justify-center md:items-start'>
        <h1 className='font-bold text-2xl'>{t('welcome')}</h1>
        <Link to="/menu">
        <button className='mt-4 bg-header-color rounded-md p-2 text-white'>{t('menu')}</button>
        </Link>
        
        </div>
    </div>
  )
}

export default Main