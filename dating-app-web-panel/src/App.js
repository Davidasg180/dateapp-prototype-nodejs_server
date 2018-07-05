import React, { Component } from 'react';
import {
    Route,
    Switch,
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
        return (
            <div className="App">
                <SideBar />
                <main>
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
                </main>
            </div>
        );
    }
}

export default (App);