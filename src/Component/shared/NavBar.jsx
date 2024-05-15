import { useState, useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom

const NavBar = () => {
  const [navbarColor, setNavbarColor] = useState('bg-green-800');
  const [navbarTextColor, setNavbarTextColor] = useState('text-white');
  const [navbarShadow, setNavbarShadow] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef(null);
  const location = useLocation(); // Get the current location using useLocation

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarColor('bg-emerald-300');
        setNavbarTextColor(' text-black');
        setNavbarShadow('shadow');
      } else {
        setNavbarColor(' bg-green-800  ');
        setNavbarTextColor('text-white');
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
    <div className='flex justify-between'>
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
                location.pathname === '/' && <h3 className='text-2xl tracking-wide  font-bold'>
                  Faculty Home
                </h3>
              }
              {
                location.pathname === '/coursedetails' && <h3 className='text-2xl tracking-wide font-bold'>
                  Course Details
                </h3>
              }
              {
                location.pathname === '/launch' && <h3 className='text-2xl tracking-wide  font-bold'>
                  launch Course
                </h3>
              }
              {
                location.pathname === '/attendance' && <h3 className='text-2xl tracking-wide  font-bold'>
                  Attendance Portal
                </h3>
              }

            </div>

          </div>
        </div>
        {/* <div className="">
          <div className="hidden md:block">
            {
                        user && <a className="btn btn-ghost normal-case text-xl">{user.displayName}</a>
                    }

            <a className="btn btn-ghost normal-case text-xl">Rayhan Al Mim</a>

          </div>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-2">
            <div className="w-10 rounded-full">
              <img src="https://i.ibb.co/v1FKW31/user.png" alt="" />
              {
                    user ? <img src={user.photoURL} alt="" /> : <img src="https://i.ibb.co/v1FKW31/user.png" alt="" />
                  }
            </div>
          </label>
          {
                user ? <Link onClick={handleLogOut} className={`btn w-28 btn-outline btn-sm ${isDarkMode ? 'text-white' : ''}`}>Logout</Link> : <Link to='/login' className={`btn w-28 btn-outline btn-sm ${isDarkMode ? 'text-white' : ''}`}>Login</Link>
              }
          <Link to='/login' className={`btn w-28 btn-outline btn-sm }`}>Login</Link>
        </div> */}
      </div>


    </div>
  );
};

export default NavBar;
