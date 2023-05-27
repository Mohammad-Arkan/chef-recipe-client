import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Chef from "../Chef/Chef";
import ErrorPage from "../ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://chef-recipe-server-zynscript.vercel.app/chefs"),
      },
      {
        path: "/chef/:id",
        element: <Chef />,
        loader: ({params}) =>
          fetch(
            `https://chef-recipe-server-zynscript.vercel.app/chef/${params.id}}`
          ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
