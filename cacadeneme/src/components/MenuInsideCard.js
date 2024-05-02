import React from 'react'
import { menuItems } from '../InsideMenuData';
const MenuInsideCard = ({type}) => {
    const items =menuItems[0][type];
  return (
    <>
  {items.map(item => (
        <div key={item.id} className='card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl'>

          <div className='flex'>
            
          <div className='w-1/3'>
          <img src={item.img} alt='' className="w-full object-cover h-[120px] md:h-[200px] rounded-2xl"/>
          </div>

              <div className='w-2/3 p-4'>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.price}</p>
              </div>
          </div>
       

          </div>
      ))}
    </>
  )
}

export default MenuInsideCard