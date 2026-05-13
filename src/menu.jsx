import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from './RTK/Slices/cartSlice';
import Navbar from './components/hero_page/navbar';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { container,pro } from './variants';

const Menu = () => {
  const dispatch =useDispatch();
const location = useLocation();
  const { data: items } = useSelector((state) => state.recipes);

  useEffect(() => {

    if (location.state?.targetId && items.length > 0) {
      const id = location.state.targetId;
      
    
      setTimeout(() => {
        const element = document.getElementById(`item-${id}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
          element.classList.add('ring-4', 'ring-orange-500', 'scale-105');
          setTimeout(() => element.classList.remove('ring-4', 'ring-orange-500', 'scale-105'), 2000);
        }
      }, 100);
      
      
      window.history.replaceState({}, document.title);
    }
  }, [location.state, items]);



  return (
    <motion.div
     
      transition={{duration:0.5}}
      >
        <Navbar items ={items} />
        <section className='pt-45'>
            <h1 className='text-center text-5xl font-bold text-white mb-2 '>MENU</h1>
                   <div className="flex justify-center">
         <h3 className="bg-amber-600 w-40 h-1 mb-4"></h3>
    </div>
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 p-6">

        {items.map((item) =>
        (
            <motion.div
              variants={pro}
             
              
            key={item.id} id={`item-${item.id}`} className="item  bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl pb-3 text-white hover:scale-105  hover:shadow-2xl transition duration-300">
        
            <img 
              src={item.image}
              className="w-full h-70 rounded-xl object-cover  mb-4"
              alt={item.name}
            />
        
            <h3 className="name text-center font-semibold text-lg truncate">
              {item.name}
            </h3>
        <div className="price text-center my-2">
             <span className=' text-orange-400 text-[18px] font-semibold'>{item.price}$</span>
        
        </div>
        <div className="flex justify-center">
            <button onClick={() => dispatch(addCart(item))} className='bg-orange-500 font-semibold tracking-wide text-white py-2 px-3 rounded-xl hover:bg-orange-600 transition-all duration-300 hover:cursor-pointer mt-3 '>
                Add TO Cart
            </button>

        </div>
       
           
        
          </motion.div>

        ))}



        



    </motion.div>

        </section>
        
      
    </motion.div>
  )
}

export default Menu;
