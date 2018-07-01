import React ,{ Component } from "react";
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
                    <ListItemText primary="Inbox" />
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