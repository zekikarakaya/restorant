import React from 'react'
import{Link} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import headerImg from '../img/header-img.jpg';
import Button from '../components/shared/Button';
const Main = () => {
    const divStyle = {
        backgroundImage: `url(${headerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
      const { t } = useTranslation();
  return (
    <div style={divStyle} className='h-[800px] relative shadow-2xl mt-10'>
        <div className='w-full flex flex-col absolute top-[240px] md:left-24 items-center justify-center md:items-start'>
        <h1 className='font-bold text-2xl'>{t('mainpage.welcome')}</h1>
        <Link to="/menu">
        <Button></Button>
        </Link>
        </div>
    </div>
  )
}

export default Main