import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useIsLogin = () => {
    const axiosPublic = useAxiosPublic();

    const { data: loginStatus = [], isLoading, refetch } = useQuery({
        queryKey: ["isLogin"], 
        queryFn: async () => {
            const res = await axiosPublic.get(`/checkLoginStatus`);
            console.log(res);
            return res.data;
        }
    });

    return { loginStatus, isLoading, refetch };
};

export default useIsLogin;
