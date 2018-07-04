import React, { Component } from 'react';
import {
    Route,
    Switch,
    BrowserRouter as Router
} from 'react-router-dom';

import SideBar from './components/SideBar';
import MapView from './views/MapView';

import './App.css';
import LoginView from './views/LoginView';

import {
    Link
} from "react-router-dom";

class App extends Component {
    render() {

        let appFrame = {
            height: 430,
            zIndex: 1,
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            width: '100%',
        }

        let mainContent = {
            flexGrow: 1,
        }

        return (
            <Router>
                <div style={appFrame}>
                    <SideBar />
                    <div style={mainContent} >
                        <h1>hello</h1>
                        <Switch>
                            <Route
                                path='/map'
                                component={MapView}
                            />
                            <Route
                                path='/login'
                                component={LoginView}
                            />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default (App);