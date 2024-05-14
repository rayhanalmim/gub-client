import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Table from "../Component/OtherComponent/Table";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children: [
            {
                path: '/student',
                element: <Table></Table>
            }
        ]
    }
])

export default Router;