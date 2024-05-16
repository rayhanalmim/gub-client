import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Table from "../Component/OtherComponent/Table";
import SignIn from "../Component/Authentication/SignIn/SignIn";
import AdminRoute from "../Component/PrivateRoute/AdminRoute";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children: [
            {
                path: '/',
                element: <AdminRoute><h3>hwllo</h3></AdminRoute>
            },
            {
                path: '/coursedetails',
                element: <AdminRoute><h3>hwllo</h3></AdminRoute>
            },
            {
                path: '/launch',
                element: <AdminRoute><Table></Table></AdminRoute>
            },
            {
                path: '/attendance',
                element: <AdminRoute><h3>hwllo</h3></AdminRoute>
            },
           
        ]
    },
    {
        path: '/signIn',
        element: <SignIn></SignIn>
    },
])

export default Router;