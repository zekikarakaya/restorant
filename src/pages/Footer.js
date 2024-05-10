import React from 'react'
import { LiaFacebookSquare } from "react-icons/lia";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const instagramLink = "https://www.instagram.com/cacabalik/?igsh=MWgyMmZsMXNzZGU4YQ%3D%3D";
  const facebooklink ="https://m.facebook.com/people/%C3%87A%C3%87A-BALIK/100054380146597/?locale=tr_TR";
  return (
    <footer className='bg-header-color' id='contact'>
      <div className='container flex justify-between'>
      <p className='p-3 m-0 text-center text-[8px] text-gray-400'>copyright@ made by Zeki Karakaya</p>
    <div className='flex space-x-2 items-center px-3'>
      <a href={facebooklink} target='_blank' rel='noopener noreferrer'>
      <LiaFacebookSquare size={32} color='white'/>
      </a>
    <FiTwitter size={26} color='white'/>
    <a href={instagramLink} target="_blank" rel="noopener noreferrer">
      <FaInstagram size={26} color='white'/>
    </a>
    </div>
      </div>
   
     </footer>
  )
}

export default Footer