import Dashboard from "@material-ui/icons/Dashboard";
import LocationOn from "@material-ui/icons/LocationOn";
import PeopleOutline from "@material-ui/icons/PeopleOutline";

import MapPage from "../pages/MapPage/MapPage";
import UsersPage from "../pages/UsersPage/UsersPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import FindLocatioPage from "../pages/FindLocatioPage/FindLocatioPage";
import ResMapPage from "../pages/ResMapPage/ResMapPage";

const panelRoutes = [
    [
        {
            path: "/",
            name: "Home",
            icon: Dashboard,
            component: DashboardPage,
            exact: true
        },
        {
            path: "/users",
            name: "Users",
            icon: PeopleOutline,
            component: UsersPage,
            exact: false
        },
        {
            path: "/map",
            name: "Map",
            icon: LocationOn,
            component: MapPage,
            exact: false,
        },
        {
            path: "/findlocation",
            name: "findlocation",
            icon: LocationOn,
            component: FindLocatioPage,
            exact: false,
        },
        {
            path: "/ResMapPage",
            name: "ResMapPage",
            icon: LocationOn,
            component: ResMapPage,
            exact: false,
        }
    ]
]

export default panelRoutes