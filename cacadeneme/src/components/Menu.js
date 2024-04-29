import React from 'react'
import { Link,Outlet } from "react-router-dom";
const Menu = () => {
  return (
    <div className='bg-green-600 w-full h-[200px] mt-20 text-white flex items-center justify-center space-x-7'>
      
      <Link to="mainfoods">Ana Yemekler</Link>
      <Link to="hotstarters">Ara Sicaklar</Link>
      <Link to="mezeler">Mezeler</Link>
      <Link to="salads">Salatalar</Link>
      <Link to="drinks">İçecekler</Link>
     
      
      <Outlet />
    </div>
  
  )
}

export default Menu