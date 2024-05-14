import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Table from "../Component/OtherComponent/Table";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children: [
            {
                path: '/',
                element: <Table></Table>
            },
            {
                path: '/coursedetails',
                element: <Table></Table>
            },
            {
                path: '/launch',
                element: <Table></Table>
            },
            {
                path: '/attendance',
                element: <Table></Table>
            },
        ]
    }
])

export default Router;