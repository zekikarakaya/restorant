import React from 'react'
import Footer from './Footer'
import FindMap from './FindMap'
import ImageGallery from './ImageGallery'
import About from './About'
import Main from './Main'
import { motion } from "framer-motion";

const Home = () => {

  return (
    <motion.div
    initial={{opacity :0}}
    animate={{opacity :1}}
    className='overflow-x-hidden overflow-y-hidden'>

     <Main></Main>
     <About></About>
     <ImageGallery></ImageGallery>
     <FindMap></FindMap>
     <Footer></Footer>
    </motion.div>
  )
}

export default Home