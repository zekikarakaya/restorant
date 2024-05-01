import React from 'react'
import Footer from './Footer'
import FindMap from './FindMap'
import ImageGallery from './ImageGallery'
import About from './About'
import Main from './Main'
import { useTranslation } from 'react-i18next';


const Home = () => {
  const { t } = useTranslation();
 

  return (
    <div className='overflow-x-hidden overflow-y-hidden'>
         {/* Aktif dil:{i18n.language} */}


{/* <h3>{t('welcome')}</h3> */}

     <Main></Main>
     <About></About>
     <ImageGallery></ImageGallery>
     <FindMap></FindMap>
     <Footer></Footer>
    </div>
  )
}

export default Home