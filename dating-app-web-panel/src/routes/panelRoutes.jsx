import Dashboard from "@material-ui/icons/Dashboard";
import LocationOn from "@material-ui/icons/LocationOn";
import PeopleOutline from "@material-ui/icons/PeopleOutline";

import MapPage from "../pages/MapPage/MapPage";
import UsersPage from "../pages/UsersPage/UsersPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";

const panelRoutes = [
    [
        {
            path: "/",
            name: "Home",
            icon: Dashboard,
            component: DashboardPage
        },
        {
            path: "/users",
            name: "Users",
            icon: PeopleOutline,
            component: UsersPage
        },
        {
            path: "/map",
            name: "Map",
            icon: LocationOn,
            component: MapPage,
        }
    ]
]

export default panelRoutes