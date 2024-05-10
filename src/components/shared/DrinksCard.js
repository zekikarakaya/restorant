import React from 'react'
import { drinkItems } from '../../data/DrinksData';
import { motion } from "framer-motion";
const DrinksCard = ({type}) => {
    const items =drinkItems[0].drink[0][type];
    const container ={
      visible:{
        transition:{
          staggerChildren:0.2
        }
      }
    }
    const item ={
      hidden:{
        opacity : 0,
        translateY :20
      },
      visible:{
        opacity :1,
        translateY :0
      }
    }
    return (
        <motion.div variants={container} initial="hidden" animate="visible" className='w-full'>
          {items.map((drinkItem) => (
            <motion.div key={drinkItem.id} variants={item} className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl">
                <div className="flex my-2">
                  <div className="w-1/3">
                    <img src={drinkItem.img} alt="" className="w-full object-cover h-[120px] md:h-[200px] rounded-2xl"/>
                  </div>
                  <div className="relative w-2/3">
                    <h1 className="absolute top-1/2 -translate-y-1/2 left-4">{drinkItem.name}</h1>
                  </div>
                </div>
            </motion.div>
          ))}
        </motion.div>
      );
}

export default DrinksCard