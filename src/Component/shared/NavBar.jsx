import { useState, useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import useIsLogin from '../../Hook/useIsLogin';
import useAxiosPublic from '../../Hook/useAxiosPublic';
import Swal from 'sweetalert2';

const NavBar = () => {
  const axiosPublic = useAxiosPublic();
  const [navbarColor, setNavbarColor] = useState('bg-green-800');
  const [navbarTextColor, setNavbarTextColor] = useState('text-white');
  const [navbarShadow, setNavbarShadow] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef(null);
  const location = useLocation(); // Get the current location using useLocation

  const { loginStatus, isLoading, refetch } = useIsLogin();

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

  const handleLogOut = async() => {
    const res = await axiosPublic.get('/getLogOut');
    if(res.data){
      Swal.fire({
        icon: "success",
        title: "Success...",
        text: "Sign Out successfully",
    });
    refetch();
    }

  }

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
        <div className="">
          <div className="">
            <h3 className={`btn btn-ghost normal-case text-xl font-bold ${navbarTextColor}`}>Rayhan Al Mim</h3>
          </div>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-2">
            <div className="w-10 rounded-full">
              <img src="https://i.ibb.co/9ySqp9L/119398683.jpg" alt="" />
            </div>
          </label>
          <div>
            <Link to='/signIn' onClick={handleLogOut} className={`btn w-28 btn-outline ${navbarTextColor} btn-sm }`}>Log Out</Link>
          </div>
        </div>
      </div>


    </div>
  );
};

export default NavBar;
