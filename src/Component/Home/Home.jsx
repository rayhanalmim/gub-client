import { NavLink, Outlet } from "react-router-dom";
import { FaChartBar, FaBeer, FaUser, FaShoppingCart, FaListUl } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { MdOutlineNotStarted } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { FaShop } from "react-icons/fa6";
import NavBar from "../shared/NavBar";

const Home = () => {
    return (
        <div className="min-h-screen">
            <div className="flex flex-col lg:flex-row w-full mx-auto relative">
                <div className="w-full lg:w-1/4 hidden lg:block">
                    <div className="justify-around top-6 sticky p-6 lg:p-8 gap-9 text-center w-full mx-auto">
                        <div className="flex flex-col gap-4">

                            <div className="flex justify-center py-5 items-center border-b-2 border-black">
                                <h3 className="text-3xl "><span className="font-bold">Teacher</span> <br /> Dashboard</h3>
                            </div>

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
