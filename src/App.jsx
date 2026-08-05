import Navbar from "./components/hero_page/navbar";
import Hero from "./components/hero_page/hero";
import Testi from "./components/hero_page/testi";
import Checkout from "./checkout";
import { Routes, Route } from "react-router-dom";
import Menu from "./menu";
import Cart from "./cart";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchRecipes } from "./RTK/Slices/recipes";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";



function App() {

 

  const location = useLocation();

  const dispatch = useDispatch();

useEffect(() =>
{
dispatch(fetchRecipes());
},[])

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Hero />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/check" element={<Checkout />} />
      </Routes>
      </AnimatePresence>
     
    </>
    
  );
}
export default App;
