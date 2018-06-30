import Project from '../views/Components/Projects/Projects.jsx';
import Liked from '../views/Components/Liked/Liked.jsx';
import Courses from '../views/Components/Courses/Courses.jsx'

const mainRoutes = [
    { path: "/dashboard/portfolio/", name: "Project", component: Project, exact:"exact" },
    { path: "/dashboard/portfolio/Courses", name: "Courses", component: Courses },
    { path: "/dashboard/portfolio/Liked", name: "Liked", component: Liked },
  ];
  
  export default mainRoutes;