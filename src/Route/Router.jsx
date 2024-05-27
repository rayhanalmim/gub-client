import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Table from "../Component/OtherComponent/Table";
import SignIn from "../Component/Authentication/SignIn/SignIn";
import AdminRoute from "../Component/PrivateRoute/AdminRoute";
import Course from "../Component/course/Course";
import CourseDetails from "../Component/course/CourseDetails";
import DeshboardHome from "../Component/Home/DeshboardHome";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: (
          <AdminRoute>
            <DeshboardHome></DeshboardHome>
          </AdminRoute>
        ),
      },
      {
        path: "/coursedetails",
        element: (
          <AdminRoute>
            <Course></Course>
          </AdminRoute>
        ),
      },
      {
        path: "/launch",
        element: (
          <AdminRoute>
            <Table></Table>
          </AdminRoute>
        ),
      },
      {
        path: "/attendance",
        element: (
          <AdminRoute>
            <h3>hwllo</h3>
          </AdminRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <AdminRoute>
            <CourseDetails></CourseDetails>
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "/signIn",
    element: <SignIn></SignIn>,
  },
]);

export default Router;
