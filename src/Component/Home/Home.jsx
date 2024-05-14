import { Link, Outlet, } from "react-router-dom";
import { FaChartBar, FaBeer, FaUser, FaShoppingCart, FaListUl } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";

const Home = () => {
    return (
        <div className=" min-h-screen">
            <div className="flex flex-col lg:flex-row w-full  mx-auto  relative">
                <div className="w-full lg:w-1/4  hidden lg:block">
                    <div className="justify-around  top-6 sticky p-6 lg:p-8 gap-9 text-center   w-full mx-auto ">
                        <div className="flex flex-col gap-4">

                            <div className="flex justify-center py-5 items-center border-b-2 border-black">
                                <h3 className="text-3xl "><span className="font-bold">Teacher</span> <br /> Dashboard</h3>
                            </div>

                            <Link to="/">
                                <button className="btn bg-sky-800  hover:text-black text-white w-full ">
                                    <FaShoppingCart className="mr-2" />
                                    Home
                                </button>
                            </Link>

                            <Link to="/student">
                                <button className="btn bg-sky-800  hover:text-black text-white w-full ">
                                    <FaShoppingCart className="mr-2" />
                                    DSR Order Request
                                </button>
                            </Link>

                            <Link to="/sellView">
                                <li className="btn bg-sky-800 text-white w-full">
                                    <FaListUl className="mr-2" />
                                    Billing Management
                                </li>
                            </Link>

                            <Link to="/manageProduct">
                                <li className="btn bg-sky-800 hover:text-black text-white w-full">
                                    <FaBeer className="mr-2" />
                                    Product Management
                                </li>
                            </Link>

                            <Link to="/shop">
                                <li className="btn bg-sky-800 hover:text-black text-white w-full">
                                    <FaShop className="mr-2" />
                                    Client Shop Management
                                </li>
                            </Link>

                            <Link to="/user">
                                <li className="btn bg-sky-800 hover:text-black text-white w-full">
                                    <FaUser className="mr-2" />
                                    Employee Management
                                </li>
                            </Link>

                            <Link to="/analysis">
                                <li className="btn bg-sky-800 hover:text-black text-white w-full">
                                    <FaChartBar className="mr-2" />
                                    Sell Analysis
                                </li>
                            </Link>


                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-3/4 pt-5 lg:pt-32 sticky top-10">
                    <div className="w-full justify-around lg:p-8 gap-9 text-center lg:-mt-32 bg-slate-100 ">
                        <div className="pb-10">
                            <h3>navbar comming</h3>
                        </div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;