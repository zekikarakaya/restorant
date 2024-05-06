import React from 'react'
import { menuItems } from '../../data/InsideMenuData';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
const MenuInsideCard = ({type}) => {
    const items =menuItems[0][type];
    const { t } = useTranslation();

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
    // bunlar ana div e vereceğin  variants={container} initial="hidden" animate="visible"
    // bu da map içindeki ilk div e vereceğin   variants={item} 
  return (
    <motion.div variants={container} initial="hidden" animate="visible" className='w-full'>
  {items.map(item1 => (
        <motion.div key={item1.id} variants={item}  className='card w-full h-[125px] md:h-[200px] shadow-xl rounded-xl my-3'>

          <div className='flex'>
            
          <div className='w-1/3'>
          <img src={item1.img} alt='' className="w-full object-cover h-[125px] md:h-[200px] rounded-2xl"/>
          </div>

              <div className='w-2/3 p-4'>
              <h3>{t(`inside-menu-name.${item1.name}`)}</h3>
        {type === "salads" || type==="mainfoods"?<p className='text-xs'>{t(`inside-description.${item1.name}`)}</p>:""}
        {type === "raki"?"":<p className='text-xs'>{t(`inside-price.${item1.price}`)}</p>}
{type ==="raki"?<p className='mt-2 text-[10px] md:text-base'><span>70CL</span> &nbsp; {t(`inside-price.${item1.yetmis}`)}</p>:""}
{type ==="raki"?<p className='mt-1 text-[10px] md:text-base'><span>50CL</span> &nbsp; {t(`inside-price.${item1.elli}`)}</p>:""}
{type ==="raki"?<p className='mt-1 text-[10px] md:text-base'><span>35CL</span> &nbsp; {t(`inside-price.${item1.otuzbes}`)}</p>:""}
{type ==="raki"?<p className='mt-1 text-[10px] md:text-base'><span>20CL</span> &nbsp; {t(`inside-price.${item1.yirmi}`)}</p>:""}
              </div>
              
          </div>
          </motion.div>
      ))}
    </motion.div>
  )
}

export default MenuInsideCard