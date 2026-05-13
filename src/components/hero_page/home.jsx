import React from 'react'
import group from "./../../assets/Group 1.png";
import burger from "./../../assets/nn.png";
import shadow from "./../../assets/shadow.png";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addCart } from '../../RTK/Slices/cartSlice';
import Swal from 'sweetalert2';

const Home = () => {
  const dispatch = useDispatch();

const handleorderNow = () =>
{
  const heroBurger = {
      id: 'hero-1', 
      name: 'The Ultimate Burger',
      price: 50,
      image: burger
      
    };
    dispatch(addCart(heroBurger));
    Swal.fire({
        title: "The special meal has been added to your Cart",
        icon: "success",
        draggable: true,
        background:"#12372A",
        color:"rgb(227, 156, 22)",
        iconColor: "rgb(227, 156, 22)",
        timer: 2000,
        showConfirmButton: false,

    })
}



  return (
    <motion.div
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ y: '100vh' }}>
      
      <section id='home' className="min-h-screen flex flex-col justify-center px-6 md:px-10 py-20">
        
        <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-11 gap-10">
          
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <img src={group} alt="Burger Club" className="w-full max-w-[300px] md:max-w-[540px]" />

            
            <div className="flex flex-col sm:flex-row gap-5 mt-10 md:ml-0">
              <button onClick={()=>handleorderNow()} className="bg-orange-500 hover:bg-orange-600 transition duration-300 px-8 py-3 rounded-lg text-white text-lg md:text-xl shadow-lg w-full sm:w-auto">
                Order Now
              </button>

              <Link to={'/menu'} className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg md:text-xl hover:bg-white hover:text-orange-500 transition duration-300 text-center w-full sm:w-auto">
                View Menu
              </Link>
            </div>
          </div>

          
          <div className="w-full md:w-1/2 flex flex-col items-center relative">
            <motion.img
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 2,
                ease: 'easeInOut', 
                repeat: Infinity
              }}
              src={burger} 
              alt="Burger" 
              className="w-[250px] sm:w-[350px] md:w-[450px] xl:w-[600px] z-10" 
            />

            
            <img 
              src={shadow} 
              alt="shadow" 
              className="w-[200px] sm:w-[300px] md:w-[400px] xl:w-[500px] -mt-8 md:-mt-12" 
            />
          </div>
        </div>
      </section>
      
    </motion.div>
  )
}

export default Home