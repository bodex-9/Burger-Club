import { FaTwitter, FaFacebook, FaPinterest, FaYoutube } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { IoTime } from "react-icons/io5";
import img1 from './../../assets/p-2.png';
import img2 from './../../assets/p-4.png';
import img3 from './../../assets/p-5.png';
import img4 from './../../assets/p-7.png';
import img5 from './../../assets/ph-2.jpg';
import img6 from './../../assets/ph-3.jpg';

const Footer = () => {
  return (
    <footer id="contact" className="pt-10 bg-[#e5ebe3] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* شبكة العناصر: عمود واحد في الموبايل، عمودين في التابلت، 4 في الشاشات الكبيرة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
          
          {/* القسم الأول: معلومات النادي والاشتراك */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl text-black font-bold">BURGER CLUB</h3>
            <p className="capitalize text-gray-700 text-sm leading-relaxed">
              Our restaurant offers a warm and welcoming dining experience where flavor meets quality.
            </p>
            <p className="capitalize text-gray-700 text-xs font-medium">
              Subscribe to our newsletter and get 25% off.
            </p>
            
            {/* حقل البريد الإلكتروني - تحسين التموضع */}
            <div className="relative flex items-center max-w-[280px]">
              <input 
                type="email" 
                placeholder="Enter Your Email" 
                className="w-full rounded-lg bg-white py-2 pl-3 pr-12 outline-none border border-transparent placeholder:text-[12px] focus:border-green-800 shadow-sm"
              />
              <button className="absolute right-0 h-full px-3 bg-green-900 text-white rounded-r-lg hover:bg-green-800 transition-colors">
                <IoIosSend className="text-2xl" />
              </button>
            </div>

            {/* أيقونات التواصل الاجتماعي */}
            <div className="flex gap-5 mt-2">
              <FaFacebook className="text-xl text-blue-700 hover:scale-110 cursor-pointer transition-transform" />
              <FaYoutube className="text-xl text-red-600 hover:scale-110 cursor-pointer transition-transform" />
              <FaTwitter className="text-xl text-blue-500 hover:scale-110 cursor-pointer transition-transform" />
              <FaPinterest className="text-xl text-red-700 hover:scale-110 cursor-pointer transition-transform" />
            </div>
          </div>

          {/* القسم الثاني: الاتصال */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg text-gray-800 font-bold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaLocationDot className="text-green-900 text-xl mt-1 shrink-0" />
                <p className="text-gray-700 text-sm">Kafr El-Sheikh, Stadium Street, office 45, 3rd floor</p>
              </li>
              <li className="flex items-center gap-3">
                <BsTelephoneFill className="text-green-900 shrink-0" />
                <p className="text-gray-700 text-sm font-semibold">+20 100 123 4567</p>
              </li>
              <li className="flex items-center gap-3">
                <MdEmail className="text-green-900 shrink-0" />
                <p className="text-gray-700 text-sm font-semibold">info@burgerclub.com</p>
              </li>
              <li className="flex items-center gap-3">
                <IoTime className="text-green-900 shrink-0" />
                <p className="text-gray-700 text-sm font-semibold">Sun – Sat: 10AM – 12AM</p>
              </li>
            </ul>
          </div>

          {/* القسم الثالث: الروابط */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg text-gray-800 font-bold">Quick Links</h3>
            <ul className="space-y-3 text-gray-700 text-sm font-medium">
              <li className="hover:text-green-900 cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-green-900 cursor-pointer transition-colors">Contact Us</li>
              <li className="hover:text-green-900 cursor-pointer transition-colors">Our Menu</li>
              <li className="hover:text-green-900 cursor-pointer transition-colors">Our Team</li>
              <li className="hover:text-green-900 cursor-pointer transition-colors">FAQ</li>
            </ul>
          </div>

          {/* القسم الرابع: الجاليري - تحسين العرض في الموبايل */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-center">
                <h3 className="text-lg text-gray-800 font-bold text-center sm:text-left">Gallery</h3>

            </div>
            
            <div className="grid grid-cols-3 gap-2">
              {[img1, img2, img5, img3, img4, img6].map((pic, index) => (
                <img 
                  key={index} 
                  className="w-full aspect-square rounded-xl object-cover hover:opacity-80 transition-opacity cursor-pointer shadow-sm" 
                  src={pic} 
                  alt="gallery"
                />
              ))}
            </div>
          </div>
        </div>

        {/* الجزء السفلي */}
        <div className="border-t border-black/5 mt-12 py-6 text-center">
          <p className="text-sm text-gray-600">
            &copy; All rights reserved 2026 | Made by{" "}
            <a 
              href="https://www.linkedin.com/in/abdullah-mhrous-70805a389" 
              className="font-bold text-green-900 hover:underline"
              target="_blank" 
              rel="noreferrer"
            >
              Abdullah Mhrous
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;