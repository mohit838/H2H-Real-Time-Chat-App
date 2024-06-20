import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound";
import HomePage from "../pages/home/HomePage";
import LogIn from "../pages/login/LogIn";
import SignUp from "../pages/signup/SignUp";

// @Children or Child Component for "<Outlet/>"in React-Router-Dom Latest version
const Layout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/signup",
    element: (
      <>
        <SignUp />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <LogIn />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <NotFound />
      </>
    ),
  },
]);

const Routing = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Routing;
