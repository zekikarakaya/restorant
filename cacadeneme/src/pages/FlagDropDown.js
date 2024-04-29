import React from 'react';
import { useTranslation } from 'react-i18next';

const FlagDropDown = () => {
  const { i18n } = useTranslation();
 
  const clickHandle=async(lang)=>{
     await i18n.changeLanguage(lang);
  }
  return (
    <div className='w-24 text-black flex flex-col absolute top-24 right-8  md:right-[276px] lg:right-[340px] rounded-lg border border-gray-500 p-3 space-y-3 z-10 text-center'>
    <div>
       <button onClick={()=>clickHandle("tr")}>
       <img src='img/turkiye.webp' alt=''></img>
       </button>
    </div>
    <div>
       <button onClick={()=>clickHandle("en")}>
         <img src='img/unitedkingdom.png' alt=''></img>
       </button>
    </div>
    <div>
       <button onClick={()=>clickHandle("ru")}>
       <img src='img/rusya.jpg' alt=''></img>
       </button>
    </div>
   </div>
  )
}

export default FlagDropDown