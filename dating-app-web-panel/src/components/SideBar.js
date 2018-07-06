import React, { Component } from "react";

import {
    Link
} from "react-router-dom";

import {
    ListItem,
    Drawer
} from "@material-ui/core";

import { withStyles } from '@material-ui/core/styles';

const styles = {
    drawerPaper: {
        position: 'relative',
        width: 250,
    }
}

class SideBar extends Component {

    render() {
        return (
            <Drawer
                variant="permanent"
                classes={{
                    paper: this.props.classes.drawerPaper,
                }}
            >
                <ListItem button>
                    <Link to="/">Home</Link>
                </ListItem>
                <ListItem button>
                    <Link to="/users">Users</Link>
                </ListItem>
                <ListItem button>
                    <Link to="/map">Map</Link>
                </ListItem>
            </Drawer>
        );
    }
}

export default withStyles(styles)(SideBar);