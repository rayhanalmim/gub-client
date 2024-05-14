import  { useState, useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { AiOutlineMenuUnfold } from 'react-icons/ai';

const NavBar = () => {
  const [navbarColor, setNavbarColor] = useState('bg-slate-100');
  const [navbarTextColor, setNavbarTextColor] = useState('text-black');
  const [navbarShadow, setNavbarShadow] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarColor('bg-sky-800');
        setNavbarTextColor('text-white');
        setNavbarShadow('shadow');
      } else {
        setNavbarColor('bg-slate-100');
        setNavbarTextColor('text-black');
        setNavbarShadow('');
      }
    };

    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setIsDrawerOpen(false);
      }
      return () => {
        window.removeEventListener('scroll', handleScroll);
        document.removeEventListener('mousedown', handleClickOutside);
      };
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

 

  return (
    <div>
      <div className={` navbar fixed ${navbarColor}  bg-opacity-75 px-1 md:px-10 z-20 transition-colors duration-300 ${navbarShadow}`}>
        <div className={`navbar-start ${navbarTextColor}`}>
          {/* Drawer for mobile view */}
          <button onClick={toggleDrawer} className="btn btn-ghost lg:hidden">
            <AiOutlineMenuUnfold className={`h-5 w-5 ${navbarTextColor}`} />
          </button>
          <div
            ref={drawerRef}
            className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${isDrawerOpen ? '' : '-translate-x-full'} bg-cyan-700 w-64`}
          >
            <button onClick={toggleDrawer} className="btn btn-ghost">
              <FaTimes className={`h-6 w-6 ${navbarTextColor}`} />
            </button>
          </div>
          <div className=' flex gap-2'>
            <div className='flex justify-center items-center'>
              <div className='h-10 w-10 md:h-14 bg-white rounded-full md:w-14 '>
                <img src="https://i.ibb.co/xMbQDNh/Green-University-of-Bangladesh-logo-svg.png" alt="" />
              </div>
            </div>
            <div className='space-y-0 pt-0 md:pt-1 w-60'>
              <h3 className={`font-semibold ${navbarTextColor}`}>Green University Of Bangladesh</h3>
              <p className='leading-none w-full'>Private Limited</p>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
      
      </div>
    </div>
  );
};

export default NavBar; 