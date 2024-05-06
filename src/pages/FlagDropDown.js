import React from 'react';
import { useTranslation } from 'react-i18next';
import trflag from "../img/turkiye.webp"
import enflag from "../img/unitedkingdom.png"
import ruflag from "../img/rusya.jpg"

const FlagDropDown = () => {
  const { i18n } = useTranslation();
 
  const clickHandle=async(lang)=>{
     await i18n.changeLanguage(lang);
  }
  return (
    <div className='w-16 md:w-24 text-black flex flex-col absolute right-0 sm:right-0 top-16 rounded-lg border border-gray-500 p-3 space-y-3 z-10 text-center'>
    <div>
       <button onClick={()=>clickHandle("tr")}>
       <img src={trflag} alt=''></img>
       </button>
    </div>
    <div>
       <button onClick={()=>clickHandle("en")}>
         <img src={enflag} alt=''></img>
       </button>
    </div>
    <div>
       <button onClick={()=>clickHandle("ru")}>
       <img src={ruflag} alt=''></img>
       </button>
    </div>
   </div>
  )
}

export default FlagDropDown


