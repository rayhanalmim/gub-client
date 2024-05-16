import { useState } from "react";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";


const AdminRoute = ({ children }) => {

    const axiosPublic = useAxiosPublic();


    const { data, isLoading } = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const res = await axiosPublic.get('/checkLoginStatus');
            console.log(res);
            return res.data;
        },
    });
    

    if(isLoading){
        return <h2>wait...</h2>
    }

    console.log(data);
    if (data == true) {
        return children;
    }

    return <Navigate state={location.pathname} to="/signIn" />;

};

export default AdminRoute;

