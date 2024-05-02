import React from 'react'
import { useTranslation } from 'react-i18next';
import { FaPhoneAlt } from "react-icons/fa";
const FindMap = () => {
  const { t } = useTranslation();
  return (
    <div className='md:h-[350px] lg:h-full'>

   <div className='container flex flex-col md:flex-row justify-between my-6 '>

    <div className='w-full md:w-1/2 flex flex-col items-center justify-center'>
        <h1 className='font-bold text-lg md:text-2xl lg:text-4xl mb-1 white-space:nowrap'>{t('mainpage.find')}</h1>
        <p className='text-sm md:text-xl mb-3'>{t('mainpage.antalya')}</p>
        <h1 className='font-bold text-lg md:text-2xl lg:text-4xl mb-1 white-space:nowrap'>{t('mainpage.hour')}</h1>
        <p className='text-sm md:text-xl mb-3'>7/24</p>

        <div className='flex space-x-2 mb-4'>

          <div className='flex items-center justify-center'>
          <FaPhoneAlt></FaPhoneAlt>
          </div>
        
          <p className='text-sm md:text-xl '>0326 618 15 71</p>
        
        </div>
        
    </div>

   <div className="map w-full md:w-1/2">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3203.090428212745!2d30.567873575340787!3d36.600131078952785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c3b79e478a866b%3A0xdda4b9bd94c0e760!2zw4dhw6dhIEJhbMSxaw!5e0!3m2!1str!2str!4v1708701907760!5m2!1str!2str"allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Örnek Web Sitesi" className='w-full h-[300px] md:h-[270px] lg:h-[450px]'></iframe>
</div> 
   </div>
    


</div>
  )
}

export default FindMap