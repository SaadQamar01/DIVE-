import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import Dashboard from "../views/Dashboard/Dashboard.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import SignupPage from "../views/SignupPage/SignupPage.jsx";

var indexRoutes = [
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/signup-page", name: "SignupPage", component: SignupPage },
  { path: "/landing-page", name: "LandingPage", component: LandingPage },
  { path: "/", name: "LoginPage", component: LoginPage },
];

export default indexRoutes;
