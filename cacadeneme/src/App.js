import{Routes,Route} from "react-router-dom";
import React from 'react';
import Home from "./pages/Home";
import Header from "./pages/Header";
import HotStarters from "./components/mainmenu/HotStarters";
import MainFoods from "./components/mainmenu/MainFoods";
import Drinks from "./components/mainmenu/Drinks";
import Mezeler from "./components/mainmenu/Mezeler";
import Salads from "./components/mainmenu/Salads";
import Alkollu from "./components/alcohol/Alkollu";
import Alkolsuz from "./components/Alkolsuz";
import Menu from "./components/mainmenu/Menu";
import Raki from "./components/alcohol/Raki";
import Whiskey from "./components/alcohol/Whiskey";
import Beer from "./components/alcohol/Beer";
import Vodka from "./components/alcohol/Vodka";
import { motion } from "framer-motion"

function App() {
  return (
    <motion.div 
    initial={{opacity :0}}
    animate={{opacity :1}}
    className="font-rubik">
      <Header></Header>
      <Routes>
  <Route path="/" element={<Home></Home>}></Route>
      <Route path="/menu" element={<Menu></Menu>}></Route>
       <Route path="/menu/hotstarters" element={<HotStarters></HotStarters>}></Route>
       <Route path="/menu/mainfoods" element={<MainFoods></MainFoods>}></Route>
       <Route path="/menu/drinks" element={<Drinks></Drinks>}></Route>
                <Route path="/menu/drinks/alkollu" element={<Alkollu></Alkollu>}></Route>
                      <Route path="/menu/drinks/alkollu/raki" element={<Raki></Raki>}></Route>
                      <Route path="/menu/drinks/alkollu/whiskey" element={<Whiskey></Whiskey>}></Route>
                      <Route path="/menu/drinks/alkollu/beer" element={<Beer></Beer>}></Route>
                      <Route path="/menu/drinks/alkollu/vodka" element={<Vodka></Vodka>}></Route>
                <Route path="/menu/drinks/alkolsuz" element={<Alkolsuz></Alkolsuz>}></Route>
       <Route path="/menu/mezeler" element={<Mezeler></Mezeler>}></Route>
       <Route path="/menu/salads" element={<Salads></Salads>}></Route>
      </Routes>


    </motion.div>
  );
}

export default App;
