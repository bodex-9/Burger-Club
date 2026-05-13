 import img_1 from './../../assets/salad.png'
 import img_2 from './../../assets/spagetti.png'
 import img_3 from './../../assets/tacos.png'
 import img_4 from './../../assets/shawrma.png'
 import img_5 from './../../assets/coffe.webp'
 import img_6 from './../../assets/chicken.webp'
 import img_7 from './../../assets/burger.png'
 import img_8 from './../../assets/fries.png'
 import { IoStarSharp } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { container, pro,lvariants } from '../../variants'
function Photos() {
  return (
    <>
    <section className='photos p-10'>
        <h2 className='text-4xl mb-4 text-white font-bold text-center'>Top Picks</h2>
            <div className="flex justify-center">
         <h3 className="bg-amber-600 w-40 h-1 mb-4"></h3>

    </div>
   <motion.div
    variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
   className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6">

  <motion.div
  variants={pro}
  className="item bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-5 text-white hover:scale-105  hover:shadow-2xl transition duration-300">

    <img 
      src={img_1} 
      className="w-full h-32 object-contain mb-4"
      alt="Salad"
    />

    <h3 className="text-center font-semibold text-lg">
      Salad
    </h3>
<div className="price text-center my-2">
     <span className=' text-orange-400 '>10$</span>

</div>
<div className="stars flex justify-center">

    <IoStarSharp className='text-orange-400 mr-1'/>
</div>
   

  </motion.div>
  
  <motion.div
  variants={pro}
  className="item bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-5 text-white hover:scale-105 transition duration-300">

    <img 
      src={img_2} 
      className="w-full h-32 object-contain mb-4"
      alt="Salad"
    />

    <h3 className="text-center font-semibold text-lg">
      Spagetti
    </h3>
    <div className="price text-center my-2">
     <span className=' text-orange-400 '>30$</span>

</div>
<div className="stars flex justify-center">
    <IoStarSharp className='text-orange-400 mr-1'/>
    <IoStarSharp className='text-orange-400 mr-1'/>
    <IoStarSharp className='text-orange-400 mr-1'/>
    <IoStarSharp className='text-orange-400 mr-1'/>
    <IoStarSharp className='text-orange-400 mr-1'/>
</div>

  </motion.div>
  <motion.div
  variants={pro}
  className="item bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-5 text-white hover:scale-105 transition duration-300">

    <img 
      src={img_3} 
      className="w-full h-32 object-contain mb-4"
      alt="Salad"
    />

    <h3 className="text-center font-semibold text-lg">
      Tacos
    </h3>
    <div className="price text-center my-2">
     <span className=' text-orange-400 '>60$</span>

</div>
<div className="stars flex justify-center">
    <IoStarSharp className='text-orange-400 mr-1'/>
    <IoStarSharp className='text-orange-400 mr-1'/>
   
</div>

  </motion.div>
  <motion.div
  variants={pro}
  className="item bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-5 text-white hover:scale-105 transition duration-300">

    <img 
      src={img_4} 
      className="w-full h-32 object-contain mb-4"
      alt="Salad"
    />

    <h3 className="text-center font-semibold text-lg">
      Shawerma
    </h3>
    <div className="price text-center my-2">
     <span className=' text-orange-400 '>80$</span>

</div>
<div className="stars flex justify-center">
    <IoStarSharp className='text-orange-400 mr-1'/>
    <IoStarSharp className='text-orange-400 mr-1'/>
    <IoStarSharp className='text-orange-400 mr-1'/>
    <IoStarSharp className='text-orange-400 mr-1'/>
    <IoStarSharp className='text-orange-400 mr-1'/>
</div>

  </motion.div>
  <motion.div
  variants={pro}
  className="item bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-5 text-white hover:scale-105 transition duration-300">

    <img 
      src={img_5} 
      className="w-full h-32 object-contain mb-4"
      alt="Salad"
    />


    <h3 className="text-center font-semibold text-lg">
      coffe
    </h3>
    <div className="price text-center my-2">
     <span className=' text-orange-400 '>100$</span>

</div>
<div className="stars flex justify-center">
    <IoStarSharp className='text-orange-400 mr-1'/>
    <IoStarSharp className='text-orange-400 mr-1'/>
    <IoStarSharp className='text-orange-400 mr-1'/>
    <IoStarSharp className='text-orange-400 mr-1'/>
    <IoStarSharp className='text-orange-400 mr-1'/>
</div>

  </motion.div>
  <motion.div
  variants={pro}
  className="item bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-5 text-white hover:scale-105 transition duration-300">

    <img 
      src={img_6} 
      className="w-full h-32 object-contain mb-4"
      alt="Salad"
    />


    <h3 className="text-center font-semibold text-lg">
      Chicken
    </h3>
    <div className="price text-center my-2">
     <span className=' text-orange-400 '>50$</span>

</div>
<div className="stars flex justify-center">
    <IoStarSharp className='text-orange-400 mr-1'/>
    <IoStarSharp className='text-orange-400 mr-1'/>
    
    <IoStarSharp className='text-orange-400 mr-1'/>
</div>
  </motion.div>
  <motion.div
  variants={pro}
  className="item bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-5 text-white hover:scale-105 transition duration-300">

    <img 
      src={img_7} 
      className="w-full h-32 object-contain mb-4"
      alt="Salad"
    />
 

    <h3 className="text-center font-semibold text-lg">
      Burger
    </h3>
   <div className="price text-center my-2">
     <span className=' text-orange-400 '>40$</span>

</div>
<motion.div
variants={pro}
className="stars flex justify-center">
    <IoStarSharp className='text-orange-400 mr-1'/>
    <IoStarSharp className='text-orange-400 mr-1'/>
    <IoStarSharp className='text-orange-400 mr-1'/>

    <IoStarSharp className='text-orange-400 mr-1'/>
</motion.div>
  </motion.div>
  <motion.div
  variants={pro}
  className="item bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-5 text-white hover:scale-105 transition duration-300">

    <img 
      src={img_8} 
      className="w-full h-32 object-contain mb-4"
      alt="Salad"
    />


    <h3 className="text-center font-semibold text-lg">
      Fries
    </h3>
        <div className="price text-center my-2">
     <span className=' text-orange-400 '>20$</span>

</div>
<div className="stars flex justify-center">
    <IoStarSharp className='text-orange-400 mr-1'/>
    <IoStarSharp className='text-orange-400 mr-1'/>
    <IoStarSharp className='text-orange-400 mr-1'/>
 
</div>

  </motion.div>

</motion.div>
<motion.div
variants={lvariants}
initial='hidden'
  whileInView="visible"
  transition={{ duration: 0.9 }}
  viewport={{ once: true , amount: 0.5}}
className=" w-full flex justify-center">
{/* <button className=' w-60 bg-amber-600 rounded-2xl py-2 mt-4 text-base hover:bg-orange-700 transition-all duration-300 text-white'>View All Menu</button> */}
<Link  to={'/menu'} className='w-60 text-center py-2 bg-transparent border-2 border-white text-white text-lg rounded-2xl mt-4 hover:bg-white hover:text-orange-400 transition-all duration-300'>View All Menu</Link>
</motion.div>
    </section>
    </>
  )
}

export default Photos;
