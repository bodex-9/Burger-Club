import { useState } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { rvariants,lvariants } from "../../variants";

const Contact = () => {

  const [formData, setformData] = useState({
    name:"",
    number:"",
    guest:"",
    date:"",
    time:"",

  })

const handleSubmit = (e) =>
{
  e.preventDefault();
    if (
    !formData.name ||
    !formData.number ||
    !formData.guest ||
    !formData.date ||
    !formData.time
  ) {
Swal.fire({
  title: "Missing Data",
  text: "Please fill all fields before booking.",
  icon: "error",

  background: "#0f2f26",
  color: "#ffffff",

  confirmButtonColor: "#f97316",

  iconColor: "#f97316",

  customClass: {
    popup: "rounded-xl shadow-2xl border border-[#f97316]/20",
  }
});
  }
    else{
Swal.fire({
  title: "Reservation Confirmed 🍽️",
  text: "Your table reservation has been received successfully.",
  icon: "success",

  timer: 2000,
  showConfirmButton: false,

  background: "#12372A",
  color: "#fff",

  iconColor: "#22c55e", 

  customClass: {
    popup: "rounded-xl shadow-2xl border border-[#f97316]/20",
    title: "text-lg font-bold",
  },
});

    }
    setformData({
    name:"",
    number:"",
    guest:"",
    date:"",
    time:"",
    })

}

const handlechange = (e) =>
{
setformData({...formData,[e.target.name]: e.target.value})
}

  return (
    <div>
      <section className="p-10">
    <h2 className="mb-2 text-3xl text-[#FBFADA] font-bold text-center">Book a Table</h2>
    <div className="flex justify-center">
         <h3 className="bg-amber-600 w-40 h-1 mb-9"></h3>

    </div>
   
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-9">
            <motion.div
            variants={lvariants}
             initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.9 }}
            viewport={{ once: true, mount: 0.5 }}
            
            className="map w-full order-2 xl:order-1 relative ">
                <iframe className="w-full h-130  rounded-xl "  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d213.4996804717571!2d30.946512360346876!3d31.10987412993361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1777929350769!5m2!1sar!2seg"
                 >
                </iframe>
                  <div className="absolute inset-0 bg-black/10 rounded-xl  pointer-events-none"></div>

            </motion.div>
          <motion.form
          variants={rvariants}
           initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.9 }}
          viewport={{ once: true , amount: 0.5}}
          onSubmit={handleSubmit} className="flex flex-col gap-6 bg-white py-5 px-4 rounded-lg  ">
            <h3 className="text-center text-xl font-semibold text-amber-600">Reservation</h3>
            <input name="name" onChange={handlechange} value={formData.name}   className="py-3 px-5 border focus:border-amber-600 outline-0 border-amber-600 shadow-lg hover:scale-103 transition-all duration-300  rounded-lg"  type="text" placeholder="Enter Your Name"/>
            <input name="number" onChange={handlechange} value={formData.number}  className="py-3 px-5 border focus:border-amber-600 outline-0 border-amber-600 shadow-lg hover:scale-103 transition-all duration-300 rounded-lg"  type="tel" placeholder="Enter Your Number"/>
            <input name="guest" onChange={handlechange} value={formData.guest}  className="py-3 px-5 border  focus:border-amber-600 outline-0 border-amber-600 shadow-lg hover:scale-103 transition-all duration-300 rounded-lg"  type="number" placeholder="Number Of Gustes"/>
            <input name="date" onChange={handlechange} value={formData.date}  className="py-3 px-5 border focus:border-amber-600 outline-0 border-amber-600 shadow-lg hover:scale-103 transition-all duration-300 rounded-lg"  type="date" />
            <input name="time" onChange={handlechange} value={formData.time}  className="py-3 px-5 border focus:border-amber-600 outline-0 border-amber-600 shadow-lg hover:scale-103 transition-all duration-300 rounded-lg"  type="time"/>
            <div className="flex justify-center">
                <button className="bg-amber-600 py-2 text-lg  hover:bg-amber-700 transition-all duration-300  px-5 text-white rounded-lg mt-2">Book Now</button>

            </div>

          </motion.form>

        </div>

      </section>


    </div>
  )
}

export default Contact;
