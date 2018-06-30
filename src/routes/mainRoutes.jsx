import Profile from "views/Profile/Profile.jsx";
import Connections from "views/Connections/Connections.jsx";
import Portfolio from "views/Portfolio/Portfolio.jsx";
import Discover from "views/Discover/Discover.jsx";

const mainRoutes = [
  { path: "/dashboard", name: "Profile", component: Profile, exact:"exact" },
  { path: "/dashboard/connections/", name: "Connections", component: Connections },
  { path: "/dashboard/portfolio/", name: "Portfolio", component: Portfolio },
  { path: "/dashboard/discover/", name: "Discover", component: Discover },
];

export default mainRoutes;
