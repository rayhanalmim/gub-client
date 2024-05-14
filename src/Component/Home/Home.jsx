import { NavLink, Outlet } from "react-router-dom";
import { FaBookReader, FaHome } from "react-icons/fa";
import { MdOutlineNotStarted } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import NavBar from "../shared/NavBar";

const Home = () => {
    return (
        <div className="min-h-screen">
            <div className="flex flex-col lg:flex-row w-full mx-auto relative">
                <div className="w-full lg:w-1/4 hidden lg:block">
                    <div className="justify-around top-6 sticky p-6 lg:p-8 gap-9 text-center w-full mx-auto">
                        <div className='h-32 w-32 bg-white mx-auto rounded-full '>
                            <img src="https://i.ibb.co/xMbQDNh/Green-University-of-Bangladesh-logo-svg.png" alt="" />
                        </div>
                        <div className='space-y-0 pt-0 mx-auto md:pt-1 w-60'>
                            <h3 className={`font-bold text-2xl leading-none pb-2`}>Green University Of Bangladesh</h3>
                            <p className='leading-none w-full'>Faculty Dashboard</p>
                        </div>
                        <div className="flex flex-col border-t-2 border-gray-700 mt-5 pt-5 gap-4">

                            {/* <div className="flex justify-center py-5 items-center border-b-2 border-black">
                                <h3 className="text-3xl "><span className="font-bold">Teacher</span> <br /> Dashboard</h3>
                            </div> */}


                            <NavLink to="/" activeClassName="active">
                                <button className="btn bg-sky-800 hover:text-black hover:bg-sky-600 text-white w-full">
                                    <FaHome className="mr-2 text-xl" />
                                    Home
                                </button>
                            </NavLink>

                            <NavLink to="/" activeClassName="active">
                                <button className="btn bg-sky-800 hover:text-black hover:bg-sky-600 text-white w-full">
                                    <MdOutlineNotStarted className="mr-2 text-2xl" />
                                    Launch Course
                                </button>
                            </NavLink>

                            <NavLink to="/student" activeClassName="active">
                                <button className="btn bg-sky-800 hover:text-black hover:bg-sky-600 text-white w-full">
                                    <FaBookReader className="mr-2 text-xl" />
                                    Existing Course
                                </button>
                            </NavLink>

                            <NavLink to="/sellView" activeClassName="active">
                                <button className="btn bg-sky-800 hover:text-black hover:bg-sky-600 text-white w-full">
                                    <AiOutlineEdit className="mr-2 text-xl" />
                                    Attendance Portal
                                </button>
                            </NavLink>

                        </div>
                    </div>
                </div>
                <div >
                    <NavBar></NavBar>
                </div>
                <div className="w-full lg:w-3/4 pt-5 lg:pt-[200px] sticky top-10">
                    <div className="w-full justify-around lg:p-8 gap-9 text-center lg:-mt-32 bg-slate-100">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
