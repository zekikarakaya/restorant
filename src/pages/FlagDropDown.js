import React from 'react';
import { useTranslation } from 'react-i18next';
import I18NextButton from '../components/shared/I18NextButton';

const FlagDropDown = () => {
  const { i18n } = useTranslation();
 
  const clickHandle=async(lang)=>{
     await i18n.changeLanguage(lang);
  }
  return (
    <div className='w-16 md:w-24 text-black flex flex-col absolute right-0 sm:right-0 top-16 rounded-lg border border-gray-500 p-3 z-10 text-center'>
    <I18NextButton clickHandle={clickHandle}></I18NextButton>
   </div>
  )
}

export default FlagDropDown


