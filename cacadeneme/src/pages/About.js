import React from 'react'
import { useTranslation } from 'react-i18next';
import aboutimg from "../img/about-img.jpg"
const About = () => {
  const { t } = useTranslation();
  return (
    <div className='mt-2 lg:h-[500px] ' id="about">

        <div className='container block lg:flex lg:justify-around space-x-0 lg:space-x-20 ' >

            <div className='h-[350px] w-1/3 border-8 border-black hidden lg:block mt-10'>
            <img src={aboutimg} alt='' className='h-full w-full object-cover '/>
            </div>
         
            <div className='w-full lg:w-2/3 p-14' >
                <h1 className='font-bold text-center text-2xl'>{t('mainpage.about-title')}</h1>
                <p className='tracking-wider mb-5 mt-6'>{t('mainpage.about')}</p>
            </div>

        </div>


    </div>
  )
}

export default About