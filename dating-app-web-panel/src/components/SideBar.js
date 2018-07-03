import React, { Component } from "react";

import {
    Link
} from "react-router-dom";

import {
    ListItem,
    Drawer
} from "@material-ui/core";

class SideBar extends Component {
    render() {
        return (
            <Drawer
                open={true}
            >
                <ListItem button>
                    <Link to="/">Home</Link>
                </ListItem>
                <ListItem button>
                    <Link to="/map">Map</Link>
                </ListItem>
            </Drawer>
        );
    }
}

export default SideBar;