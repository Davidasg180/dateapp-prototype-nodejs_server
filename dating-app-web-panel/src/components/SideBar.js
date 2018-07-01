import React ,{ Component } from "react";

import {
    Link
} from "react-router-dom";

import {
    ListItem,
    ListItemText,
    Drawer
} from "@material-ui/core";


class SideBar extends Component {
    render() {
        return (
            <Drawer
                variant="permanent"
                anchor="left"
            >
                <ListItem button>
                    <Link to="/map">Map</Link>
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Starred" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Send mail" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Drafts" />
                </ListItem>
            </Drawer>
        );
    }
}

export default SideBar;