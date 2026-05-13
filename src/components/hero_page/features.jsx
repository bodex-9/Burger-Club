import featimg from "./../../assets/features.jpg"
import { MdDeliveryDining } from "react-icons/md";
import { SiCodechef } from "react-icons/si";
import { MdRestaurantMenu } from "react-icons/md";
import { lvariants, rvariants } from "../../variants";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <section className="features py-12 px-6 md:px-20 overflow-hidden">
      {/* العنوان الرئيسي */}
      <div className="text-center mb-10">
        <h2 className="feat text-3xl font-bold tracking-wide">Why People Choose Us</h2>
        <div className="bg-amber-600 h-1 w-24 md:w-40 mt-3 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
        
        {/* قسم الصورة مع الحركة */}
        <div className="flex justify-center">
          <motion.img
            variants={lvariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.9 }}
            viewport={{ once: true, amount: 0.5 }}
            src={featimg}
            className="w-full max-w-lg rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
            alt="Delicious Burger"
          />
        </div>

        {/* قسم المميزات */}
        <motion.div
          variants={rvariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.5 }}
          className="space-y-6"
        >
          {/* Feature Item 1 */}
          <div className="bg-white p-6 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group">
            <div className="shrink-0 mb-4 sm:mb-0 sm:mr-6">
              <MdDeliveryDining className="text-6xl bg-orange-100 rounded-full p-3 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">Fast Delivery</h3>
              <p className="text-xs text-gray-600 tracking-tighter font-medium">
                We ensure your food arrives quickly and fresh, right to your doorstep. Our delivery team works efficiently to provide hot and ready meals.
              </p>
            </div>
          </div>

          {/* Feature Item 2 */}
          <div className="bg-white p-6 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group">
            <div className="shrink-0 mb-4 sm:mb-0 sm:mr-6">
              <SiCodechef className="text-6xl bg-orange-100 rounded-full p-3 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">Expert Chefs</h3>
              <p className="text-xs text-gray-600 tracking-tighter font-medium">
                Our experienced chefs craft every dish with passion and precision. With strong culinary skills, they make sure every meal is cooked to perfection.
              </p>
            </div>
          </div>

          {/* Feature Item 3 */}
          <div className="bg-white p-6 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group">
            <div className="shrink-0 mb-4 sm:mb-0 sm:mr-6">
              <MdRestaurantMenu className="text-6xl bg-orange-100 rounded-full p-3 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">Variety Menu</h3>
              <p className="text-xs text-gray-600 tracking-tighter font-medium">
                Our diverse menu offers a wide range of dishes to suit every taste. Whether you prefer classic meals or something new and adventurous.
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}