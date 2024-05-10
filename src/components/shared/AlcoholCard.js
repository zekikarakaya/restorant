import React from 'react'
import { Link} from "react-router-dom";
import alkolimg from "../../img/whiskey.jpg";
import noalkolimg from "../../img/mesrubat.jpg";
const AlcoholCard = ({type}) => {
  return (
    <div className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl">
    <Link to={type ==="alcohol"? "/menu/drinks/alkollu ": "/menu/drinks/alkolsuz"}>
      <div className="flex">
        <div className="w-1/3">
          <img src={type === "alcohol" ? alkolimg : noalkolimg} alt="" className="w-full object-cover h-[120px] md:h-[200px] rounded-2xl"/>
        </div>
        <div className="relative w-2/3">
          <h1 className="absolute top-1/2 -translate-y-1/2 left-4">
            {type === "alcohol"? "Alkollü":"Alkolsüz"}
          </h1>
        </div>
      </div>
    </Link>
  </div>
  )
}

export default AlcoholCard