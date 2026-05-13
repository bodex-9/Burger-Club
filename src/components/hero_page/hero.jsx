import Home from "./home";
import Features from "./features";
import Photos from "./photos";
import Testi from "./testi";
import About from "./about";
import Contact from "./contact";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Hero() {

  return (
    <>
      <Home/>
      <Features />
      <Photos />
      <Testi />
      <About/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default Hero;
