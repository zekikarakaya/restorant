import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import MenuInsideCard from './MenuInsideCard';

const MainFoods = () => {
  const { t } = useTranslation();
  return (
    <div className='mt-28 container flex flex-col lg:items-center gap-y-2'>
      
      <Link to="/menu">
        <button className='my-4 bg-header-color rounded-md p-2 text-white'>{t('mainpage.menu')}</button>
        </Link>
  
       <MenuInsideCard type="mainfoods"></MenuInsideCard>

    </div>
  )
}

export default MainFoods