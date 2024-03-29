// Router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import Home from "./../Pages/Home/Home";
import Login from "./../Pages/Login/Login";
import Registration from "./../Pages/Registration/Registration";
import ErrorPage from "./../Pages/Error/ErrorPage";
import AssignAssignment from "../Pages/AssignAssignment/AssignAssignment";
import UpdateAssignment from "../Pages/UpdateAssignment/UpdateAssignment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/create-assignment",
        element: <AssignAssignment />,
      },
      {
        path: "/assignmen/update/:id",
        element: <UpdateAssignment />,
      },
    ],
  },
]);
