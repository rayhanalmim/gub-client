import { useState } from "react";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useIsLogin from "../../Hook/useIsLogin";


const AdminRoute = ({ children }) => {

    const axiosPublic = useAxiosPublic();


    const { loginStatus, isLoading, refetch } = useIsLogin();
    

    if(isLoading){
        return <h2>wait...</h2>
    }

    console.log(loginStatus[0]?.isLogin);
    if (loginStatus[0]?.isLogin == true) {
        return children;
    }

    return <Navigate state={location.pathname} to="/signIn" />;

};

export default AdminRoute;

