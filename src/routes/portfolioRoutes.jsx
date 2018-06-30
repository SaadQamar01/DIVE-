import Projects from "views/Projects/Projects.jsx";
import Courses from "views/Courses/Courses.jsx";
import Liked from "views/Liked/Liked.jsx";

const portfolioRoutes = [
  { path: "/dashboard/portfolio", name: "Projects", component: Projects, exact:"exact" },
  { path: "/dashboard/portfolio/cources", name: "Courses", component: Courses },
  { path: "/dashboard/portfolio/liked", name: "Liked", component: Liked },
];

export default portfolioRoutes;
