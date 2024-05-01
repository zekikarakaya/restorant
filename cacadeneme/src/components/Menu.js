import React from "react";
import { Link, Outlet } from "react-router-dom";
const Menu = () => {
  return (
    <div className="mt-28 h-full">
      <div className="container flex flex-col items-center gap-y-2">
        
        <div className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl ">
          <Link to="mainfoods">
            <div className="flex">
              <div className="w-1/3">
              <img src="img/anayemekler.jpg" alt=""  className="w-full object-cover h-[120px] md:h-[200px] rounded-2xl"/>
              </div>
              <div className="relative w-2/3">
              <h1 className="absolute top-1/2 -translate-y-1/2 left-4">Ana Yemekler</h1>
              </div>
            </div>
          </Link>
        </div>

        <div className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl ">
          <Link to="hotstarters">
            <div className="flex">
              <div className="w-1/3">
              <img src="img/arasicak.jpg" alt=""  className="w-full object-cover h-[120px] md:h-[200px] rounded-2xl"/>
              </div>
              <div className="relative w-2/3">
              <h1 className="absolute top-1/2 -translate-y-1/2 left-4">Ara Sıcaklar</h1>
              </div>
            </div>
          </Link>
        </div>

        <div className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl ">
          <Link to="mezeler">
            <div className="flex">
              <div className="w-1/3">
              <img src="img/mezeler.jpg" alt=""  className="w-full object-cover h-[120px] md:h-[200px] rounded-2xl"/>
              </div>
              <div className="relative w-2/3">
              <h1 className="absolute top-1/2 -translate-y-1/2 left-4">Mezeler</h1>
              </div>
            </div>
          </Link>
        </div>

        <div className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl ">
          <Link to="salads">
            <div className="flex">
              <div className="w-1/3">
              <img src="img/salatalar.jpg" alt=""  className="object-cover w-full h-[120px] md:h-[200px] rounded-2xl"/>
              </div>
              <div className="relative w-2/3">
              <h1 className="absolute top-1/2 -translate-y-1/2 left-4">Salatalar</h1>
              </div>
            </div>
          </Link>
        </div>

        <div className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl ">
          <Link to="drinks">
            <div className="flex">
              <div className="w-1/3">
              <img src="img/İçecekler.jpg" alt=""  className="w-full h-[120px] md:h-[200px] rounded-2xl object-cover"/>
              </div>
              <div className="relative w-2/3">
              <h1 className="absolute top-1/2 -translate-y-1/2 left-4">İçecekler</h1>
              </div>
            </div>
          </Link>
        </div>

      </div>

      <Outlet />
    </div>
  );
};

export default Menu;
