import React from 'react'
import { LiaFacebookSquare } from "react-icons/lia";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-header-color flex justify-between' id='contact'>
    <p className='p-3 m-0 text-center text-[8px] text-gray-400'>copyright@ made by Zeki Karakaya</p>
    <div className='flex space-x-2 items-center px-3'>
    <LiaFacebookSquare size={32} />
    <FiTwitter size={26}/>
    <FaInstagram size={26}/>
    </div>
 
     </footer>
  )
}

export default Footer