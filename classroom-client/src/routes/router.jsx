import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";
import MyStudent from "../pages/MyStudent";
import AddStudent from "../pages/AddStudent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "my-student",
        element: <MyStudent></MyStudent>,
      },
      {
        path: "add-student",
        element: <AddStudent></AddStudent>,
      },
    ],
  },
]);

export default router;
