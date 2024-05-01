import React, { useState, useEffect, useRef } from "react";
import { CgMenu } from "react-icons/cg";
import DropDown from "./DropDown";
import { Link } from "react-router-dom";
import FlagDropDown from "./FlagDropDown";
import { TfiWorld } from "react-icons/tfi";
import { useTranslation } from 'react-i18next';


const Header = () => {
  const { t } = useTranslation();
  const [dropshow, setDropShow] = useState(false);
  const [flagshow, setFlagShow] = useState(false);
  const dropbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropbarRef.current && !dropbarRef.current.contains(event.target)) {
        setDropShow(false);
        setFlagShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const flagFunc =()=>{
    setFlagShow(!flagshow);
    setDropShow(false);
  }
  const dropFunc =()=>{
    setDropShow(!dropshow);
    setFlagShow(false);
  }
  const logoFunc =()=>{
    setDropShow(false);
    setFlagShow(false);
  }
  return (
    <div className="header bg-header-color text-white fixed z-10 w-full top-0 left-0">
      <div
        className="container flex items-center justify-between"
        ref={dropbarRef}
      >
        <Link to="/" onClick={logoFunc}>
          <img src="img/logo.png" alt="" className="w-28 h-22"></img>
        </Link>
          
          <div className="flex space-x-4">

          
        {/* DROPBAR */}
        <div className="space-x-0 md:space-x-4 lg:space-x-8 flex items-center">

          <div className="cursor-pointer" onClick={flagFunc}>
            <TfiWorld size={28} />
            {flagshow ? <FlagDropDown></FlagDropDown> : ""}
          </div>

          <div className="space-x-4 lg:space-x-8 hidden md:flex items-center">
            <Link to="/" onClick={logoFunc}>{t('home')}</Link>
            <Link to="/menu" onClick={logoFunc}>{t('menu')}</Link>
            <a href="#about" onClick={logoFunc}>{t('about-header')}</a>
            <a href="#contact" onClick={logoFunc}>{t('contact')}</a>
          </div>
        </div>


        <div className="flex items-center md:hidden">

          <button onClick={dropFunc}>
            <CgMenu size={28} />
            {dropshow ? <DropDown></DropDown> : ""}
          </button>
        </div>

        </div>
       

      </div>
 
 
    </div>
    
  );
};

export default Header;
