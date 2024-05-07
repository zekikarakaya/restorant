import{Routes,Route} from "react-router-dom";
import React from 'react';
import Header from "./pages/Header";
import { motion } from "framer-motion"
import { routes } from "./routes";

function App() {
  return (
    <motion.div 
    initial={{opacity :0}}
    animate={{opacity :1}}
    className="font-rubik">
      <Header></Header>
      <Routes>
       {
	routes.map((item,i)=>(
		<Route key={i} {...item}></Route>
	))
}
      </Routes>
    </motion.div>
  );
}

export default App;
