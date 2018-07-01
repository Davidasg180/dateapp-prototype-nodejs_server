import React, { Component } from 'react';
import {
    Divider,
    Drawer,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';
import './App.css';
import SideBar from './components/SideBar';

class App extends Component {
    render() {
        return (
            <div className="App">
                <SideBar />
            </div>
        );
    }
}

export default App;
