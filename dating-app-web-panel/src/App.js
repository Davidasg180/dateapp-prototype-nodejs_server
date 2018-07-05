import React, { Component } from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';

import LoginView from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <main>
                    <Switch>
                    <Route
                            path='/login'
                            component={LoginView}
                        />
                        <Route
                            path='/'
                            component={HomePage}
                        />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default (App);