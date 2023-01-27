// import Layout from "../Views/Layout/Layout";
// import { Outlet } from "react-router-dom";
import { Navigate, useRoutes } from "react-router-dom";
import { AlphabeticalPatterns, Home, TriangularPatterns } from "../Pages/pages";
// import Layout from "../Views/Layout/Layout";


const Routes = () => {
  const element = useRoutes([
    {
      path: "/",
      // element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/triangular-pattern",
          element: <TriangularPatterns />,
        },
        {
          path: "/alphabetical-pattern",
          element: <AlphabeticalPatterns />
        }
      ],
    },

    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);

  return element;
};

export default Routes;