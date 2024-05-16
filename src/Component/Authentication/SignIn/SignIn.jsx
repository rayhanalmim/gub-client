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

    const handleLogin = async(e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");

        console.log(email, password);

        if (!email) {
            Swal.fire({
                icon: "error",
                title: "Please Enter Your Email",
                text: "Invalid Email",
            });
            return null;
        }
        if (!password) {
            Swal.fire({
                icon: "error",
                title: "Please Enter Your Password",
                text: "Invalid Password",
            });
            return null;
        }
        const res = await axiosPublic.post(`/getAccess?email=${email}&password=${password}`);
        console.log("error is : ", res.data);
        if(res.status === 201){
            Swal.fire({
                icon: "error",
                title: "login unsuccessful ",
                text: "invalid credentials",
            });
        }
        if(res.status === 200){
            const res = await axiosPublic.post('/getLogin');
            Swal.fire({
                icon: "success",
                title: "Success...",
                text: "Sign in success",
            });
            navigate('/');
            console.log(res.data);
        }

    };

    return (
        <div
            className="py-8 px-4 min-h-screen w-full bg-[url('https://i.ibb.co/M8X9LN5/iconic-photo-of-green-university-dp-20210309132337.jpg')] bg-cover bg-center h-3/4 md:h-full  inset-0 bg-black bg-opacity-55 bg-blend-multiply"
        >
            <div className=" hero-overlay bg-opacity-60 mt-12 w-full  mx-auto max-w-md p-8 pb-16 space-y-3 rounded-xl border my-5  ">
                <Link to="/">
                    <div className="w-32 mx-auto block rounded-full  ">
                        <img src="https://i.ibb.co/xMbQDNh/Green-University-of-Bangladesh-logo-svg.png" />
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
                    <button className="block w-full p-3 text-center rounded-xl dark:text-gray-900 dark:bg-violet-400 btn btn-primary text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium  text-sm px-5 py-2.5  me-2 mb-2">
                        Sign In
                    </button>
                </form>

            </div>
        </div>
    );
};

export default SignIn;