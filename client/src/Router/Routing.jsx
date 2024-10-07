import PropTypes from "prop-types";
import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import NotFound from "../components/NotFound";
import { useAuthContext } from "../context/AuthContext";
import HomePage from "../pages/home/HomePage";
import LogIn from "../pages/login/LogIn";
import SignUp from "../pages/signup/SignUp";

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

const ProtectedRoute = ({ children }) => {
  const { authUser } = useAuthContext();

  if (!authUser) {
    return <Navigate to="/login" />;
  }

  return children;
};

const PublicRoute = ({ children }) => {
  const { authUser } = useAuthContext();

  if (authUser) {
    return <Navigate to="/" />;
  }

  return children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          </>
        ),
      },
    ],
  },
  {
    path: "/signup",
    element: (
      <>
        <PublicRoute>
          <SignUp />
        </PublicRoute>
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <PublicRoute>
          <LogIn />
        </PublicRoute>
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

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
