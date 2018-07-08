import React, { Component } from 'react';
import './App.css';

import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';

import LoginPage from './pages/LoginPage/LoginPage';
import Panel from './pages/Panel';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route
                    exact
                    path='/login'
                    component={LoginPage}
                />
                <Route
                    path='/'
                    component={Panel}
                />
            </Switch>
        );
    }
}

export default (App);