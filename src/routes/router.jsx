import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../pages/Homepage/HomePage";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";
import AllProjects from "../pages/Projects/AllProjects";
import Blog from "../pages/Blog/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/all-projects",
        element: <AllProjects />
      },
      {
        path: "/blog",
        element: <Blog />
      }
    ],
  },
  {
    path: "/projects/:id",
    element: <ProjectDetails></ProjectDetails>
  },
]);
