import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../Pages/Home";
import Portfolio from "../Pages/Portfolio";
import ErrorPage from "../Pages/ErrorPage";
import BlogPage from "../Pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Portfolio />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      }
    ],
  },
], {
  basename: "/portfolio",
});

export default router;
