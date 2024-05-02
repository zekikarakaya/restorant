import React from "react";
import {Outlet } from "react-router-dom";

import MenuCard from "./MenuCard";
const Menu = () => {
  return (
    <div className="mt-28 h-full">
      <div className="container flex flex-col items-center gap-y-2">
        
         
       <MenuCard></MenuCard>


      </div>

      <Outlet />
    </div>
  );
};

export default Menu;

