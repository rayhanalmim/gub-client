import Swal from "sweetalert2";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../Hook/useAxiosPublic";

const showSuccessAlert = () => {
    Swal.fire({
        icon: "success",
        title: "Success...",
        text: "Sign in success",
    });
};

const showErrorAlert = (error) => {
    Swal.fire({
        icon: "error",
        title: "login unsuccessful ",
        text: error,
    });
};

const SignIn = () => {
    const axiosPublic = useAxiosPublic();
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");

    };

    return (
        <div
            className="py-8 px-4 min-h-screen bg-sky-900"
        >
            <div className=" bg-sky-800  w-full  mx-auto max-w-md p-8 pb-16 space-y-3 rounded-xl border my-5  ">
                <Link to="/">
                    <div className="w-32 mx-auto block rounded-full  ">
                        <img src="https://i.ibb.co/SKQbk36/Black-And-White-Modern-Vintage-Retro-Brand-Logo-7-removebg-preview.png" />
                    </div>
                </Link>

                <form className="space-y-6 " onSubmit={handleLogin}>
                    <div className="space-y-1 text-sm">
                        <label className="block  text-white">Email</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email"
                            className="w-full px-4 py-3 border rounded-md dark:border-gray-700 dark:bg-gray-900   focus:dark:border-violet-400"
                        />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block  text-white ">Password</label>
                        <input
                            type="text"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 rounded-md border dark:border-gray-700 dark:bg-gray-900   focus:dark:border-violet-400"
                        />
                    </div>
                    <button className="block w-full p-3 text-center rounded-xl dark:text-gray-900 dark:bg-violet-400 btn btn-primary">
                        Sign In
                    </button>
                </form>

            </div>
        </div>
    );
};

export default SignIn;