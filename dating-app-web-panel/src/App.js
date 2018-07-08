import React, { Component } from 'react';
import './App.css';

import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';

import Root from './pages/Root';
import LoginPage from './pages/LoginPage/LoginPage';

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
                    component={Root}
                />
            </Switch>
        );
    }
}

export default (App);