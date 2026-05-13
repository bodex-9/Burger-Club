import about from "./../../assets/About.jpg";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { FaUtensils } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Transition } from "@headlessui/react";
import { rvariants,lvariants } from "../../variants";

const About = () => {
  const text = `Welcome to our restaurant where we serve fresh and delicious meals
            made with high-quality ingredients. Our mission is to provide an
            unforgettable dining experience with amazing flavors and excellent service.`;

  const pvariants = {

    hidden:{
      opacity:0,
    },
    visible:{
     opacity: 1,

      transition:{
      staggerChildren:0.03,
    },
    },
 

  }

  const spanvariant = {
        hidden:{
      opacity:0,
    },
    visible:{
     opacity: 1,
    },

  }

  return (
    <section id='about' className="p-10 text-white">
      

      <h2 className="text-center mb-2 text-[#FBFADA] font-bold text-4xl tracking-widest">
        About Us
      </h2>
          <div className="flex justify-center">
         <h3 className="bg-amber-600 w-40 h-1 mb-7"></h3>

    </div>

      <div className="flex flex-col lg:flex-row gap-12 items-center">

 
        <motion.div
          variants={lvariants}
           initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.9 }}
          viewport={{ once: true , amount: 0.5}}
          
          className="w-full lg:w-1/2">
          <img
            className="w-full h-115 object-cover rounded-2xl shadow-lg"
            src={about}
            alt="about"
          />
        </motion.div>

        <div className="w-full lg:w-1/2">

          <motion.p 
          variants={pvariants}
          initial='hidden'
            whileInView="visible"
            viewport={{ once: true }}

          className="text-gray-200 leading-7 tracking-wide">
            {text.split("").map((char,index) =>
            (
              <motion.span variants={spanvariant} key={index}>{char}</motion.span>
            ))}
            
          </motion.p>

          <motion.div
            variants={rvariants}
           initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.9 }}
          viewport={{ once: true , amount: 0.5}}
          className="flex flex-col gap-4 mt-8">

            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-lg p-4 rounded-2xl hover:scale-105 transition">
              <FaCalendarAlt className="text-amber-500 text-2xl" />
              <h3>10+ Years of Experience</h3>
            </div>

            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-lg p-4 rounded-2xl hover:scale-105 transition">
              <FaUsers className="text-amber-500 text-2xl" />
              <h3>5000+ Happy Customers</h3>
            </div>

            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-lg p-4 rounded-2xl hover:scale-105 transition">
              <FaUtensils className="text-amber-500 text-2xl" />
              <h3>200+ Delicious Dishes</h3>
            </div>
          </motion.div>

          {/* Button */}
          <motion.div
            variants={rvariants}
           initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.9 }}
          viewport={{ once: true , amount: 0.5}}
           className="mt-8">
            <Link to={'/menu'} className="bg-amber-600 hover:bg-amber-700 transition px-6 py-3 rounded-xl">
              Explore Menu
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;