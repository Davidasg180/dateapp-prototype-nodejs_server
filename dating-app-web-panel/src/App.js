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

const root = {
    flexGrow: 1
};

class App extends Component {
    render() {
        const contentStyle = { transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)' };

        return (
            <Router>
                <div className={root}>
                    <SideBar />
                    <div style={contentStyle}>
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

export default App;