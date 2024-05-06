import React from 'react';
import { Link } from "react-router-dom";
import { menuItems } from '../../data/Menudata';
import { useTranslation } from 'react-i18next';

const MenuCard = ({type}) => {
  const items = menuItems[0][type];
  const { t } = useTranslation();
  return (
    <>
      {items.map((menuItem) => (
        <div key={menuItem.id} className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl">
          <Link to={menuItem.route}>
            <div className="flex">
              <div className="w-1/3">
                <img src={menuItem.img} alt="" className="w-full object-cover h-[120px] md:h-[200px] rounded-2xl"/>
              </div>
              <div className="relative w-2/3">
                <h1 className="absolute top-1/2 -translate-y-1/2 left-4">{t(`menu-name.${menuItem.name}`)}</h1>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default MenuCard;
