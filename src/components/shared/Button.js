import React from 'react'
import { useTranslation } from 'react-i18next';
import { TiArrowBackOutline } from 'react-icons/ti';

const Button = ({type}) => {
    const { t } = useTranslation();
  return (
    <button className='my-4 bg-header-color rounded-md p-2 text-white'>
        {type==="icon"?<TiArrowBackOutline size={25}></TiArrowBackOutline>:t('mainpage.menu')} 
    </button>
  )
}

export default Button