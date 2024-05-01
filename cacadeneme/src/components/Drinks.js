import React from 'react'
import { Link, Outlet } from "react-router-dom";
const Drinks = () => {
  return (
    <div className='w-full h-[250px] bg-black text-white flex justify-center items-center'>
        <Link to="/menu/drinks/alkollu">Alkollü</Link>
        <Link to="/menu/drinks/alkolsuz">Alkolsüz</Link>
        <Outlet></Outlet>
    </div>
  )
}

export default Drinks