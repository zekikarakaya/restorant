import{Routes,Route} from "react-router-dom";
import React from 'react';
import Home from "./pages/Home";
import Header from "./pages/Header";
import HotStarters from "./components/HotStarters";
import MainFoods from "./components/MainFoods";
import Drinks from "./components/Drinks";
import Mezeler from "./components/Mezeler";
import Salads from "./components/Salads";
import Alkollu from "./components/Alkollu";
import Alkolsuz from "./components/Alkolsuz";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
  <Route path="/" element={<Home></Home>}></Route>
      <Route path="/menu" element={<Menu></Menu>}></Route>
      <Route path="/menu/hotstarters" element={<HotStarters></HotStarters>}></Route>
      <Route path="/menu/mainfoods" element={<MainFoods></MainFoods>}></Route>
      <Route path="/menu/drinks" element={<Drinks></Drinks>}></Route>
                 <Route path="/menu/drinks/alkollu" element={<Alkollu></Alkollu>}></Route>
                 <Route path="/menu/drinks/alkolsuz" element={<Alkolsuz></Alkolsuz>}></Route>
      <Route path="/menu/mezeler" element={<Mezeler></Mezeler>}></Route>
      <Route path="/menu/salads" element={<Salads></Salads>}></Route>
      </Routes>


      
    </>
  );
}

export default App;
