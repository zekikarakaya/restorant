import React from 'react'
import { Link } from "react-router-dom";
import DrinksCard from './DrinksCard';
const Alkolsuz = () => {
  
  return (
    <div className='mt-28 container flex flex-col lg:items-center gap-y-2'>
<Link to="/menu/drinks">
        <button className='my-4 bg-header-color rounded-md p-2 text-white'>Drinks</button>
        </Link>
        <DrinksCard type="alkolsuz"></DrinksCard>
    </div>
  )
}

export default Alkolsuz

