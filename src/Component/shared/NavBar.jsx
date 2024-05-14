import { useState, useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom

const NavBar = () => {
  const [navbarColor, setNavbarColor] = useState('bg-slate-100');
  const [navbarTextColor, setNavbarTextColor] = useState('text-black');
  const [navbarShadow, setNavbarShadow] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef(null);
  const location = useLocation(); // Get the current location using useLocation

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
      <div className={` navbar fixed py-5 ${navbarColor}  bg-opacity-75 px-1 md:px-10 z-20 transition-colors duration-300 ${navbarShadow}`}>
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
          <div className=''>
            <div className=''>
              {
                location.pathname === '/' && <h3>Pages / Home </h3>
              }
              {
                location.pathname === '/launch' && <h3>Pages / launch Course </h3>
              }
              {
                location.pathname === '/coursedetails' && <h3>Pages / Course Details </h3>
              }
              {
                location.pathname === '/attendance' && <h3>Pages / Attendance Portal </h3>
              }
            </div>

            <div>
              {
                location.pathname === '/' && <h3 className='text-2xl tracking-wide text-black font-bold'>
                  Faculty Home
                </h3>
              }
              {
                location.pathname === '/coursedetails' && <h3 className='text-2xl tracking-wide text-black font-bold'>
                  Course Details
                </h3>
              }
              {
                location.pathname === '/launch' && <h3 className='text-2xl tracking-wide text-black font-bold'>
                  launch Course
                </h3>
              }
              {
                location.pathname === '/attendance' && <h3 className='text-2xl tracking-wide text-black font-bold'>
                  Attendance Portal
                </h3>
              }

            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
      </div>
    </div>
  );
};

export default NavBar;
