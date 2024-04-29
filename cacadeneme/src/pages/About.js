import React from 'react'
import { useTranslation } from 'react-i18next';
const About = () => {
  const { t } = useTranslation();
  return (
    <div className='mt-1 lg:h-[500px] lg:mb-8' id="about">

        <div className='container block lg:flex lg:justify-around space-x-0 lg:space-x-20 px-0 lg:px-16 p-2 lg:p-6' >

            <div className='h-[400px] w-1/3 border-8 border-black hidden lg:block'>
            <img src='img/about-img.jpg' alt='' className='h-full w-full object-cover'/>
            </div>
         
            <div className='w-full lg:w-2/3 p-14' >
                <h1 className='font-bold text-center text-2xl'>{t('about-title')}</h1>
                <p className='tracking-wider mb-5 mt-6'>{t('about')}</p>
            </div>

        </div>


    </div>
  )
}

export default About