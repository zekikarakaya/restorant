import React from 'react'
import { drinkItems } from '../DrinksData';

const DrinksCard = ({type}) => {
    const items =drinkItems[0].drink[0][type];
    return (
        <>
          {items.map((drinkItem) => (
            <div key={drinkItem.id} className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl">
                <div className="flex">
                  <div className="w-1/3">
                    <img src={drinkItem.img} alt="" className="w-full object-cover h-[120px] md:h-[200px] rounded-2xl"/>
                  </div>
                  <div className="relative w-2/3">
                    <h1 className="absolute top-1/2 -translate-y-1/2 left-4">{drinkItem.name}</h1>
                  </div>
                </div>
            </div>
          ))}
        </>
      );
}

export default DrinksCard