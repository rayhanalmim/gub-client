import { NavLink, Outlet, useLocation } from "react-router-dom";
import { FaBookReader, FaHome } from "react-icons/fa";
import { MdOutlineNotStarted } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import NavBar from "../shared/NavBar";
import useCourse from "../../Hook/useCourse";

const Home = () => {
  const location = useLocation(); // Get the current location using useLocation

  //   {`/details/:${cour?._id}

  return (
    <div className=" ">
      <div className="flex flex-col lg:flex-row w-full bg-[url('https://i.ibb.co/M8X9LN5/iconic-photo-of-green-university-dp-20210309132337.jpg')] bg-cover bg-center h-3/4 md:h-full  inset-0 bg-black bg-opacity-55 bg-blend-multiply ">
        {" "}
        {/* bg img sec */}
        <div className="w-full  lg:w-1/4 bg-opacity-30 bg-black transition-colors duration-300  hidden lg:block">
          <div className="justify-around fixed z-20 top-4 p-6 lg:p-8 gap-9 text-center w-1/4 mx-auto">
            <div className="h-32 w-32 bg-white mx-auto rounded-full ">
              <img
                src="https://i.ibb.co/xMbQDNh/Green-University-of-Bangladesh-logo-svg.png"
                alt=""
              />
            </div>
            <div className="space-y-0 pt-0 mx-auto md:pt-1 w-60">
              <h3
                className={`font-bold text-gray-50 text-3xl leading-none pb-2 `}
              >
                Green University Of Bangladesh
              </h3>
              <p className="leading-none w-full text-gray-300 font-extrabold tracking-wide">
                Faculty Dashboard
              </p>
            </div>
            <div className="flex flex-col border-t-2  border-gray-200 mt-5 pt-5 gap-4">
              {/* <div className="flex justify-center py-5 items-center border-b-2 border-black">
                                <h3 className="text-3xl "><span className="font-bold">Teacher</span> <br /> Dashboard</h3>
                            </div> */}

              {location.pathname === "/" ? (
                <NavLink to="/" activeClassName="active">
                  <button className="btn  hover:text-black hover:bg-teal-300 bg-teal-300 text-black w-full">
                    <FaHome className="mr-2 text-xl" />
                    Home
                  </button>
                </NavLink>
              ) : (
                <NavLink to="/" activeClassName="active">
                  <button className="btn bg-emerald-800 hover:text-black hover:bg-teal-300 text-white w-full">
                    <FaHome className="mr-2 text-xl" />
                    Home
                  </button>
                </NavLink>
              )}

              {location.pathname === "/launch" ? (
                <NavLink to="/launch" activeClassName="active">
                  <button className="btn hover:text-black hover:bg-teal-300 bg-teal-300 text-black w-full">
                    <MdOutlineNotStarted className="mr-2 text-2xl" />
                    Launch Course
                  </button>
                </NavLink>
              ) : (
                <NavLink to="/launch" activeClassName="active">
                  <button className="btn bg-emerald-800 hover:text-black hover:bg-teal-300 text-white w-full">
                    <MdOutlineNotStarted className="mr-2 text-2xl" />
                    Launch Course
                  </button>
                </NavLink>
              )}

              {location.pathname === "/coursedetails" ? (
                <NavLink to="/coursedetails" activeClassName="active">
                  <button className="btn bg-teal-300 text-black hover:text-black hover:bg-teal-300  w-full">
                    <FaBookReader className="mr-2 text-xl" />
                    Existing Course
                  </button>
                </NavLink>
              ) : (
                <NavLink to="/coursedetails" activeClassName="active">
                  <button className="btn bg-emerald-800 hover:text-black hover:bg-teal-300 text-white w-full">
                    <FaBookReader className="mr-2 text-xl" />
                    Existing Course
                  </button>
                </NavLink>
              )}

              {location.pathname === "/attendance" ? (
                <NavLink to="/attendance" activeClassName="active">
                  <button className="btn hover:text-black hover:bg-teal-300 bg-teal-300 text-black w-full">
                    <AiOutlineEdit className="mr-2 text-xl" />
                    Attendance Portal
                  </button>
                </NavLink>
              ) : (
                <NavLink to="/attendance" activeClassName="active">
                  <button className="btn bg-emerald-800 hover:text-black hover:bg-teal-300 text-white w-full">
                    <AiOutlineEdit className="mr-2 text-xl" />
                    Attendance Portal
                  </button>
                </NavLink>
              )}
            </div>
          </div>
        </div>
        <div className="">
          <NavBar></NavBar>
        </div>
        <div className="w-full min-h-screen lg:w-3/4 pt-5 lg:pt-[220px] rounded-tl-lg top-10">
          <div className="w-full justify-around lg:p-8 gap-9 text-center lg:-mt-32  ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
