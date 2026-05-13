import { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useSelector } from 'react-redux';
import Cart from '../../cart';

function Navbar() {
  const items = useSelector(state => state.recipes.data || []);
  const Cartitems = useSelector(state => state.Cart);
  const navigate = useNavigate();
  const location = useLocation();

  const [ismenuopen, setmenu] = useState(false);
  const [isopen, setisopen] = useState(false);
  const [search, setSearch] = useState("");
  const [filtered, setfiltered] = useState([]);

  useEffect(() => {
    if (!items || items.length === 0) return;
    if (search.trim() === "") {
      setfiltered([]);
      return;
    }
    const result = items.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    setfiltered(result);
  }, [search, items]);

  const scorlltoItem = (id) => {
    if (location.pathname === '/menu') {
      const element = document.getElementById(`item-${id}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        element.classList.add('ring-4', 'ring-orange-500', 'bg-orange-100/20', 'scale-105', 'transition-all', 'duration-500');
        setTimeout(() => {
          element.classList.remove('ring-4', 'ring-orange-500', 'bg-orange-100/20', 'scale-105', 'transition-all', 'duration-500');
        }, 2000);
      }
    } else {
      navigate('/menu', { state: { targetId: id } });
    }
    setSearch("");
    setfiltered([]);
    setmenu(false); // إغلاق القائمة عند اختيار عنصر
  };

  useEffect(() => {
    document.body.style.overflow = isopen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isopen]);

  return (
    <>
      <header className='navv flex justify-between items-center sm:py-7 py-4 px-7 md:px-32 bg-[#12372A] fixed z-50 w-full shadow-xl'>
        
        {/* 1. Logo - تعديل الحجم ليتناسب مع الموبايل */}
        <HashLink smooth to={'/#home'}>
          <h3 className='text-xl md:text-2xl logo font-bold cursor-pointer text-white'> BURGER CLUB</h3>
        </HashLink>

        {/* Desktop Menu */}
        <ul className='hidden xl:flex items-center gap-8 font-semibold text-sm text-white'>
          <li><HashLink smooth to='/#home' className='p-2 hover:text-orange-400 duration-300'>Home</HashLink></li>
          <li><Link to='/menu' className='p-2 hover:text-orange-400 duration-300'>Menu</Link></li>
          <li><HashLink smooth to="/#about" className='p-2 hover:text-orange-400 duration-300'>About</HashLink></li>
          <li><HashLink smooth to='/#contact' className='p-2 hover:text-orange-400 duration-300'>Contact</HashLink></li>
          <li>
            <div className='relative cursor-pointer' onClick={() => setisopen(true)}>
              <FaShoppingCart className='text-2xl' />
              <span className='absolute -top-2 -right-2 bg-orange-600 rounded-full w-5 h-5 flex items-center justify-center text-[10px] text-white'>
                {Cartitems.length}
              </span>
            </div>
          </li>
        </ul>

        {/* 2. Search & Mobile Toggle Container */}
        <div className="flex items-center gap-4">
          {/* Search Input - تحسين العرض في الموبايل */}
          <div className="relative flex items-center">
            <CiSearch className='absolute left-2 text-xl text-gray-500' />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="bg-[#FBFADA] w-32 sm:w-48 md:w-64 h-9 pl-8 pr-2 rounded-xl outline-0 text-black text-sm"
            />
            {filtered.length > 0 && (
              <div className='absolute top-full left-0 w-full bg-[#FBFADA] mt-2 rounded-lg shadow-xl max-h-60 overflow-y-auto z-[110] border border-gray-200'>
                {filtered.map((item) => (
                  <div key={item.id} onClick={() => scorlltoItem(item.id)} className="px-4 py-2 text-black hover:bg-orange-100 cursor-pointer border-b last:border-none text-sm font-medium">
                    {item.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 3. Mobile Icons Container */}
          <div className="flex items-center gap-3 xl:hidden">
             {/* Cart Icon for Mobile */}
             <div className='relative cursor-pointer text-[#FBFADA]' onClick={() => setisopen(true)}>
              <FaShoppingCart className='text-2xl' />
              <span className='absolute -top-2 -right-2 bg-orange-600 rounded-full w-4 h-4 flex items-center justify-center text-[10px]'>
                {Cartitems.length}
              </span>
            </div>

            {/* Hamburger Menu Icon */}
            <svg
              onClick={() => setmenu(!ismenuopen)}
              className="w-8 h-8 cursor-pointer text-[#FBFADA]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={ismenuopen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
            </svg>
          </div>
        </div>

        {/* 4. Mobile Menu Overlay - تحسين التموضع */}
        <div
          className={`absolute top-[72px] left-0 w-full bg-[#12372A] border-t border-white/10 py-6 flex flex-col items-center gap-6 font-semibold transition-all duration-300 shadow-2xl xl:hidden ${
            ismenuopen ? 'translate-y-0 opacity-100 visible' : '-translate-y-10 opacity-0 invisible'
          }`}
        >
          <HashLink smooth to="/#home" onClick={() => setmenu(false)} className="text-[#FBFADA] hover:text-orange-400">Home</HashLink>
          <Link to='/menu' onClick={() => setmenu(false)} className="text-[#FBFADA] hover:text-orange-400">Menu</Link>
          <HashLink smooth to="/#about" onClick={() => setmenu(false)} className="text-[#FBFADA] hover:text-orange-400">About</HashLink>
          <HashLink smooth to='/#contact' onClick={() => setmenu(false)} className="text-[#FBFADA] hover:text-orange-400">Contact</HashLink>
        </div>

        <Cart isopen={isopen} setisopen={setisopen} />
      </header>
    </>
  );
}

export default Navbar;