import React from "react";
import {Outlet } from "react-router-dom";
import MenuCard from "../shared/MenuCard";
import { motion } from "framer-motion";
const Menu = () => {

  return (
    <motion.div 
    initial={{opacity :0}}
    animate={{opacity :1}}
    className="mt-28 h-full">
      <div className="container flex flex-col items-center gap-y-2">
       <MenuCard type="mainmenus"></MenuCard>
      </div>
      <Outlet />
    </motion.div>
  );
};

export default Menu;

